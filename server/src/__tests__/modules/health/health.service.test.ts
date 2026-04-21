import { describe, test, expect } from 'bun:test';
import healthService from '../../../modules/health/health.service.ts';

describe('healthService.getSystemHealth', () => {
  test('should return an object with the correct shape', () => {
    const result = healthService.getSystemHealth();
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('timestamp');
    expect(result).toHaveProperty('uptime');
    expect(result).toHaveProperty('database');
  });

  test('should return status "ok" or "degraded"', () => {
    const result = healthService.getSystemHealth();
    expect(['ok', 'degraded']).toContain(result.status);
  });

  test('should return a valid ISO timestamp', () => {
    const result = healthService.getSystemHealth();
    expect(new Date(result.timestamp).toISOString()).toBe(result.timestamp);
  });

  test('should return uptime as a string ending in "s"', () => {
    const result = healthService.getSystemHealth();
    expect(result.uptime).toMatch(/^\d+s$/);
  });
});
