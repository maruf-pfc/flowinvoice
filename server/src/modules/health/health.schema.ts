import { z } from 'zod';
import type { CreateHealthDto } from './health.dto.ts';

/**
 * Zod schema for validating the creation of a health record.
 * This should match the CreateHealthDto.
 */
export const createHealthSchema = z.object({
  message: z
    .string({
      message: 'message is required',
    })
    .min(3, 'message must be at least 3 characters long'),
});
