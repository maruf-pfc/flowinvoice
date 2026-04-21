/**
 * Data Transfer Objects (DTOs) for the Health module.
 *
 * DTOs describe the shape of data crossing boundaries (e.g. from the
 * HTTP controller to the service, or service to the client).
 * They decouple the application logic from the database schema (IHealth).
 */

export interface CreateHealthDto {
  message: string;
  source?: string;
}

export interface HealthResponseDto {
  id: string;
  message: string;
  source: string;
  createdAt: string;
}

export interface SystemHealthStatusDto {
  status: string;
  timestamp: string;
  uptime: string;
  database: string;
}
