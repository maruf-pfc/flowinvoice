import { Router } from 'express';
import healthController from './health.controller.ts';
import validate from '../../middlewares/validate.ts';
import { createHealthSchema } from './health.schema.ts';

/**
 * Health Router
 * Located inside the health domain folder to preserve modularity.
 * @route /api/v1/health
 */
const router = Router();

// GET request
router.get('/', healthController.getHealth);

// POST request with Schema boundary validation
router.post('/', validate(createHealthSchema), healthController.createPing);

export default router;
