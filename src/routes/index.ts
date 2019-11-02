import { Router } from 'express';
import TestRouter from './test';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/test', TestRouter);

// Export the base-router
export default router;
