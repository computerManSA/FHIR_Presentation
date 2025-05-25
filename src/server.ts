
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Access code validation endpoint
app.post('/api/validate', async (req, res) => {
  const { code } = req.body;
  
  try {
    const accessCode = await prisma.accessCode.findUnique({
      where: { code },
      include: { accesses: true }
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
        codeId: accessCode.id
      }
    });

    res.json({ valid: true });
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({ valid: false, error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API Server running on port ${PORT}`);
});
