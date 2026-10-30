import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import apiRouter from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRouter);

// Global Error Handler
app.use(errorHandler);

// Start server
const server = app.listen(config.port, () => {
  console.log(`[Server] Herr backend running on port ${config.port} (${config.nodeEnv})`);
  console.log(`[Server] Health check: http://localhost:${config.port}/api/health`);
});

export default app;
