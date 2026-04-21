import { Router } from 'express';
import healthRoutes from '../modules/health/health.routes.ts';

/**
 * Central Route Registry — /api/v1
 *
 * This is the single place where all module routers are imported
 * and mounted. The Express app only talks to this file.
 *
 * To add a new module:
 *   1. Create src/modules/<feature>/<feature>.routes.ts
 *   2. Import it here and mount it:
 *      router.use('/feature', featureRoutes);
 */
const router = Router();

router.use('/health', healthRoutes);

// ─── Register new module routes below ────────────────────────────────────────
// router.use('/users',    userRoutes);
// router.use('/products', productRoutes);

export default router;
