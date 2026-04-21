import Health, { type IHealth } from './health.model.ts';
import type { CreateHealthDto } from './health.dto.ts';

/**
 * HealthRepository — Infrastructure layer for the Health domain.
 * Completely encapsulates all Mongoose interactions (find, create, save).
 * The service layer calls these functions instead of interacting with models directly.
 */

const findAll = async (): Promise<IHealth[]> => {
  return Health.find().exec();
};

const findById = async (id: string): Promise<IHealth | null> => {
  return Health.findById(id).exec();
};

const create = async (data: CreateHealthDto): Promise<IHealth> => {
  // Map DTO to Mongoose creation payload
  const healthRecord = new Health({
    message: data.message,
    source: data.source || 'api',
  });

  return healthRecord.save();
};

const healthRepository = {
  findAll,
  findById,
  create,
};

export default healthRepository;
