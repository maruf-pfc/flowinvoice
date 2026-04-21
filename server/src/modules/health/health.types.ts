/**
 * Module-scoped TypeScript types for the Health domain.
 * Use this file for enums, aliases, or utility types specific to this module
 * that are not full DTOs or Database interfaces.
 */

export type HealthStatusLevel = 'ok' | 'degraded' | 'down';

export type DatabaseConnectionState =
  | 'disconnected'
  | 'connected'
  | 'connecting'
  | 'disconnecting'
  | 'unknown';
