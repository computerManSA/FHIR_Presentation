import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(cors());
// Add error handling for Prisma connection
prisma
  .$connect()
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
  });

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite dev server
      "http://127.0.0.1:5173",
      "http://0.0.0.0:5173",
      "https://moh-fhir.replit.app",
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

// Access logging endpoint
app.post("/api/access-log", async (req, res) => {
  const { code, timestamp, success } = req.body;

  try {
    // First ensure the access code exists
    const accessCode = await prisma.accessCode.upsert({
      where: { code },
      update: {},
      create: { code, maxUses: 1 },
    });

    // Then upsert the site access record
    await prisma.siteAccess.upsert({
      where: {
        deviceId_codeId: {
          deviceId: req.ip,
          codeId: accessCode.id,
        },
      },
      update: {
        accessCount: { increment: 1 },
        lastAccess: new Date(timestamp),
      },
      create: {
        deviceId: req.ip,
        codeId: accessCode.id,
        accessCount: 1,
        lastAccess: new Date(timestamp),
      },
    });
    res.json({ status: "logged" });
  } catch (error) {
    console.error("Error logging access:", error);
    res.status(500).json({ error: "Failed to log access" });
  }
});

// Access code validation endpoint
app.post("/api/validate", async (req, res) => {
  console.log("Received validation request:", req.body);
  const { code } = req.body;
  console.log("Received code:", code);
  try {
    if (!code || typeof code !== "string") {
      return res.json({ valid: false, error: "Invalid code format" });
    }

    const accessCode = await prisma.accessCode.findUnique({
      where: { code: code.trim() },
      include: { accesses: true },
    });

    if (!accessCode) {
      return res.json({ valid: false, error: "Code not found" });
    }

    // Check if code has exceeded max uses
    if (accessCode.accesses.length >= accessCode.maxUses) {
      return res.json({ valid: false });
    }

    // Record this access (use upsert to handle existing records)
    await prisma.siteAccess.upsert({
      where: {
        deviceId_codeId: {
          deviceId: req.ip,
          codeId: accessCode.id,
        },
      },
      update: {
        accessCount: { increment: 1 },
        lastAccess: new Date(),
      },
      create: {
        deviceId: req.ip,
        codeId: accessCode.id,
        accessCount: 1,
        lastAccess: new Date(),
      },
    });

    res.json({ valid: true });
  } catch (error) {
    console.error("Validation error:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ valid: false, error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 API Server running on port ${PORT}`);
  console.log(`📡 Server accessible at http://0.0.0.0:${PORT}`);
});
