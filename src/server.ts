import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Access code validation endpoint
app.post("/api/validate", async (req, res) => {
  const { code } = req.body;
  console.log("Received code:", code);
  try {
    const accessCode = await prisma.accessCode.findUnique({
      where: { code },
      include: { accesses: true },
    });

    if (!accessCode) {
      return res.json({ valid: false });
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

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API Server running on port ${PORT}`);
  console.log(`Access the API at http://0.0.0.0:${PORT}/api/validate`);
});
