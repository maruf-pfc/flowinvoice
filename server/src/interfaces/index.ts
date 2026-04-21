/**
 * Standard API response shape.
 */
export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

/**
 * Standard API error response shape.
 */
export interface IApiErrorResponse {
  success: false;
  message: string;
  errorOrigin?: unknown;
  stack?: string;
}
