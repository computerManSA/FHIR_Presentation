import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite dev server
      "http://127.0.0.1:5173",
      "http://0.0.0.0:5173",
      /\.replit\.dev$/, // Replit deployment domains
      /\.replit\.app$/, // Replit app domains
    ],
    credentials: true,
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept", "Authorization"],
  }),
);
app.use(express.json());

// Access logging endpoint
app.post("/api/access-log", async (req, res) => {
  const { code, timestamp, success } = req.body;
  
  try {
    await prisma.siteAccess.create({
      data: {
        deviceId: req.ip,
        accessCode: {
          connectOrCreate: {
            where: { code },
            create: { code, maxUses: 1 }
          }
        },
        accessCount: 1,
        lastAccess: new Date(timestamp)
      }
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

    // Record this access
    await prisma.siteAccess.create({
      data: {
        deviceId: req.ip, // Using IP as device ID for simplicity
        codeId: accessCode.id,
      },
    });

    res.json({ valid: true });
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({ valid: false, error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API Server running on port ${PORT}`);
});
