import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import apiRouter from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Determine allowed origins for CORS
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
];

const envOrigins = (process.env.ALLOWED_ORIGINS || config.clientUrl || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = Array.from(new Set([...defaultOrigins, ...envOrigins]));

const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server, curl, mobile, and non-browser requests
    if (!origin) {
      return callback(null, true);
    }

    // Allow explicitly configured origins (local dev & production domain)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Allow Vercel production and preview deployment URLs (*.vercel.app)
    if (/^https:\/\/([a-zA-Z0-9_-]+\.)*vercel\.app$/.test(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRouter);

// Global Error Handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || config.port;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] Herr backend running on port ${PORT}`);
  console.log(`[Server] Health check: /api/health`);
});

export default app;
