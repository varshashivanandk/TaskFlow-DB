// server.js
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import taskRoutes from './src/routes/taskRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import connectDB from './db/connect.js';

dotenv.config(); // Load .env

const app = express();

// Security Headers
app.use(helmet());

// Rate Limiting (100 requests per 15 min per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP. Please try again later.'
});
app.use(limiter);

// JSON parser
app.use(express.json());

// CORS - allow only specific origin in production
app.use(cors({
  origin: '*', // Later change '*' to your frontend URL (like http://localhost:3000 or deployed frontend)
}));

// Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/tasks', taskRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('✅ TaskFlow API is running');
});

// Error Handler (last middleware)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
