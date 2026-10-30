import { Router } from 'express';
import { getHealth, getProjectInfo } from '../controllers/apiController.js';

const router = Router();

// Health check endpoint
router.get('/health', getHealth);

// Project info endpoint
router.get('/info', getProjectInfo);

export default router;
