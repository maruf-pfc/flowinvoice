import type { Document } from 'mongoose';
import mongoose, { Schema, type Model } from 'mongoose';

/**
 * Mongoose Document interface. This describes the shape of the data
 * as it actually exists in MongoDB, including Mongoose-specific fields.
 */
export interface IHealth extends Document {
  message: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose Schema definition for the Health domain.
 * Notice that schema and DB logic is co-located with the module,
 * rather than in a global "models" directory.
 */
const healthSchema = new Schema<IHealth>(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      default: 'api',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

healthSchema.index({ source: 1 });

const Health: Model<IHealth> = mongoose.model<IHealth>('Health', healthSchema);

export default Health;
