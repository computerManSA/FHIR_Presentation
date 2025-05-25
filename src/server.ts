
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Access code validation endpoint
app.post('/api/validate', async (req, res) => {
  const { code } = req.body;
  
  // TODO: Replace with your actual validation logic
  const isValid = code === '123456'; // Example validation
  
  res.json({ valid: isValid });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API Server running on port ${PORT}`);
});
