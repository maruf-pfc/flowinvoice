import type { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.ts';
import ApiResponse from '../../utils/ApiResponse.ts';
import healthService from './health.service.ts';
import { HttpStatus } from '../../constants/http.ts';
import { Messages } from '../../constants/messages.ts';

/**
 * HealthController — HTTP layer.
 * Parses requests, calls service, formats response.
 */

/**
 * GET /api/v1/health
 * Returns current API + database health status.
 */
const getHealth = catchAsync(async (_req: Request, res: Response) => {
  const data = healthService.getSystemHealth();
  res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, Messages.SUCCESS, data));
});

/**
 * POST /api/v1/health
 * Creates a domain health ping record safely using validate middleware.
 */
const createPing = catchAsync(async (req: Request, res: Response) => {
  // Access typed data from Zod validation
  const { message } = req.body;

  const record = await healthService.createPing({ message });

  res
    .status(HttpStatus.CREATED)
    .json(new ApiResponse(HttpStatus.CREATED, Messages.CREATED, record));
});

const healthController = {
  getHealth,
  createPing,
};

export default healthController;
