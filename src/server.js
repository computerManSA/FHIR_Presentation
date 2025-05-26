
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import validator from "validator";

const prisma = new PrismaClient();
const app = express();

// Enable trust proxy for Replit environment
app.set('trust proxy', 1);

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
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
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
    retryAfter: 15 * 60 // 15 minutes in seconds
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiting for validation endpoint
const validationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Only 5 validation attempts per IP per 15 minutes
  message: {
    error: "Too many validation attempts. Please try again in 15 minutes.",
    retryAfter: 15 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Don't count successful validations
});

// Apply rate limiting to all API routes
app.use('/api', apiLimiter);

// In-memory store for failed attempts (in production, use Redis)
const failedAttempts = new Map();
const LOCKOUT_TIME = 30 * 60 * 1000; // 30 minutes
const MAX_FAILED_ATTEMPTS = 3;

// Function to check if IP is locked out
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

// Function to record failed attempt
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

// Function to clear failed attempts on success
const clearFailedAttempts = (ip) => {
  failedAttempts.delete(ip);
};

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite dev server
      "http://127.0.0.1:5173",
      "http://0.0.0.0:5173",
      "https://moh-fhir.replit.app", // Production deployment
      /\.replit\.dev$/, // Replit deployment domains
      /\.replit\.app$/, // Replit app domains
    ],
    credentials: true,
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept", "Authorization"],
  }),
);
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Security monitoring endpoint (admin only)
app.get("/api/security-status", (req, res) => {
  const stats = {
    totalBlockedIPs: failedAttempts.size,
    currentTime: new Date().toISOString(),
    blockedIPs: Array.from(failedAttempts.entries()).map(([ip, data]) => ({
      ip: ip.replace(/\d+\.\d+\.\d+\./, 'xxx.xxx.xxx.'), // Partially mask IP for privacy
      attempts: data.count,
      lastAttempt: new Date(data.lastAttempt).toISOString(),
      isLocked: isLockedOut(ip)
    }))
  };
  res.json(stats);
});

// Access code validation endpoint with enhanced security
app.post("/api/validate", validationLimiter, async (req, res) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  
  // Check if IP is locked out due to too many failed attempts
  if (isLockedOut(clientIP)) {
    return res.status(429).json({ 
      valid: false, 
      error: "Too many failed attempts. Access temporarily blocked.",
      retryAfter: 30 * 60 // 30 minutes
    });
  }

  console.log("Received validation request from IP:", clientIP);
  const { code } = req.body;
  
  try {
    // Input validation and sanitization
    if (!code || typeof code !== "string") {
      recordFailedAttempt(clientIP);
      return res.json({ valid: false, error: "Invalid code format" });
    }

    // Sanitize and validate the code
    const sanitizedCode = validator.escape(code.trim());
    
    // Basic format validation (alphanumeric, 6-10 characters)
    if (!validator.isAlphanumeric(sanitizedCode) || 
        sanitizedCode.length < 6 || 
        sanitizedCode.length > 10) {
      recordFailedAttempt(clientIP);
      return res.json({ valid: false, error: "Invalid code format" });
    }

    // Add a small delay to prevent timing attacks
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

    // Check if code has exceeded max uses
    if (accessCode.accesses.length >= accessCode.maxUses) {
      recordFailedAttempt(clientIP);
      return res.json({ valid: false, error: "Access code has been used" });
    }

    // Record successful access using upsert to handle duplicate attempts
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

    // Clear failed attempts on successful validation
    clearFailedAttempts(clientIP);
    
    console.log(`Successful validation from IP: ${clientIP}, Code: ${sanitizedCode}`);
    res.json({ valid: true });
    
  } catch (error) {
    console.error("Validation error:", error);
    recordFailedAttempt(clientIP);
    res.status(500).json({ valid: false, error: "Service temporarily unavailable" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API Server running on http://0.0.0.0:${PORT}`);
});
