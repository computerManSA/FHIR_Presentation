
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import validator from "validator";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const app = express();

// Enable trust proxy for Replit environment
app.set('trust proxy', 1);

// Security headers with relaxed CSP for development
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "ws:", "wss:", "http:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// Rate limiting for API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: "Too many requests from this IP, please try again later.",
    retryAfter: 15 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiting for validation endpoint
const validationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: "Too many validation attempts. Please try again in 15 minutes.",
    retryAfter: 15 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
});

// In-memory store for failed attempts
const failedAttempts = new Map();
const LOCKOUT_TIME = 30 * 60 * 1000;
const MAX_FAILED_ATTEMPTS = 3;

const isLockedOut = (ip) => {
  const attempts = failedAttempts.get(ip);
  if (!attempts) return false;
  
  const now = Date.now();
  if (now - attempts.lastAttempt > LOCKOUT_TIME) {
    failedAttempts.delete(ip);
    return false;
  }
  
  return attempts.count >= MAX_FAILED_ATTEMPTS;
};

const recordFailedAttempt = (ip) => {
  const now = Date.now();
  const attempts = failedAttempts.get(ip) || { count: 0, lastAttempt: now };
  
  if (now - attempts.lastAttempt > LOCKOUT_TIME) {
    attempts.count = 1;
  } else {
    attempts.count++;
  }
  
  attempts.lastAttempt = now;
  failedAttempts.set(ip, attempts);
};

const clearFailedAttempts = (ip) => {
  failedAttempts.delete(ip);
};

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://0.0.0.0:5173",
    "https://moh-fhir.replit.app",
    /\.replit\.dev$/,
    /\.replit\.app$/,
  ],
  credentials: true,
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept", "Authorization"],
}));

app.use(express.json());
app.use('/api', apiLimiter);

// Serve static files from dist directory in production
app.use(express.static(path.join(__dirname, '../dist')));

// Global error handler with production logging
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message,
    stack: err.stack
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Security monitoring endpoint
app.get("/api/security-status", (req, res) => {
  const stats = {
    totalBlockedIPs: failedAttempts.size,
    currentTime: new Date().toISOString(),
    blockedIPs: Array.from(failedAttempts.entries()).map(([ip, data]) => ({
      ip: ip.replace(/\d+\.\d+\.\d+\./, 'xxx.xxx.xxx.'),
      attempts: data.count,
      lastAttempt: new Date(data.lastAttempt).toISOString(),
      isLocked: isLockedOut(ip)
    }))
  };
  res.json(stats);
});

// Access code validation endpoint
app.post("/api/validate", validationLimiter, async (req, res) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  
  if (isLockedOut(clientIP)) {
    return res.status(429).json({ 
      valid: false, 
      error: "Too many failed attempts. Access temporarily blocked.",
      retryAfter: 30 * 60
    });
  }

  console.log("Received validation request from IP:", clientIP);
  const { code } = req.body;
  
  try {
    if (!code || typeof code !== "string") {
      recordFailedAttempt(clientIP);
      return res.json({ valid: false, error: "Invalid code format" });
    }

    const sanitizedCode = validator.escape(code.trim());
    
    if (!validator.isAlphanumeric(sanitizedCode) || 
        sanitizedCode.length < 6 || 
        sanitizedCode.length > 10) {
      recordFailedAttempt(clientIP);
      return res.json({ valid: false, error: "Invalid code format" });
    }

    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));

    const accessCode = await prisma.accessCode.findUnique({
      where: { code: sanitizedCode },
      include: { accesses: true },
    });

    if (!accessCode) {
      recordFailedAttempt(clientIP);
      console.log(`Failed validation attempt from IP: ${clientIP}, Code: ${sanitizedCode}`);
      return res.json({ valid: false, error: "Invalid access code" });
    }

    if (accessCode.accesses.length >= accessCode.maxUses) {
      recordFailedAttempt(clientIP);
      return res.json({ valid: false, error: "Access code has been used" });
    }

    await prisma.siteAccess.upsert({
      where: {
        deviceId_codeId: {
          deviceId: clientIP,
          codeId: accessCode.id,
        },
      },
      update: {
        accessCount: { increment: 1 },
        lastAccess: new Date(),
      },
      create: {
        deviceId: clientIP,
        codeId: accessCode.id,
        accessCount: 1,
        lastAccess: new Date(),
      },
    });

    clearFailedAttempts(clientIP);
    console.log(`Successful validation from IP: ${clientIP}, Code: ${sanitizedCode}`);
    res.json({ valid: true });
    
  } catch (error) {
    console.error("Validation error:", error);
    recordFailedAttempt(clientIP);
    res.status(500).json({ 
      valid: false, 
      error: "Service temporarily unavailable",
      details: error.message
    });
  }
});

// Catch-all handler for SPA routing
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API Server running on http://0.0.0.0:${PORT}`);
});
