import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept']
}));
app.use(express.json());

// Access code validation endpoint
app.post("/api/validate", async (req, res) => {
  const { code } = req.body;
  console.log("Received code:", code);
  try {
    if (!code || typeof code !== 'string') {
      return res.json({ valid: false, error: 'Invalid code format' });
    }

    const accessCode = await prisma.accessCode.findUnique({
      where: { code: code.trim() },
      include: { accesses: true },
    });

    if (!accessCode) {
      return res.json({ valid: false, error: 'Code not found' });
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
