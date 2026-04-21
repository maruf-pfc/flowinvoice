import mongoose from 'mongoose';
import healthRepository from './health.repository.ts';
import type { CreateHealthDto, SystemHealthStatusDto, HealthResponseDto } from './health.dto.ts';
import type { DatabaseConnectionState, HealthStatusLevel } from './health.types.ts';

/**
 * HealthService — Business logic for the health domain.
 * Depends ONLY on the repository, never on Mongoose models directly.
 */

const getSystemHealth = (): SystemHealthStatusDto => {
  const dbState = mongoose.connection.readyState;

  const dbStatus: Record<number, DatabaseConnectionState> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const status: HealthStatusLevel = dbState === 1 ? 'ok' : 'degraded';

  return {
    status,
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: dbStatus[dbState] ?? 'unknown',
  };
};

/**
 * Creates a new health ping and maps the resulting database document to a DTO.
 */
const createPing = async (data: CreateHealthDto): Promise<HealthResponseDto> => {
  // Business logic: enforce source prefix or validation before passing to repo
  const enrichedData: CreateHealthDto = {
    ...data,
    source: data.source || 'user-ping',
  };

  const record = await healthRepository.create(enrichedData);

  // Return DTO, not raw Mongoose document (encapsulation)
  return {
    id: record._id.toString(),
    message: record.message,
    source: record.source,
    createdAt: record.createdAt.toISOString(),
  };
};

const healthService = {
  getSystemHealth,
  createPing,
};

export default healthService;
