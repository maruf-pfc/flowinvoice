import type { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * catchAsync — wraps async route handlers and forwards errors to next().
 *
 * @example
 * router.get('/example', catchAsync(async (req, res) => {
 *   const data = await someAsyncOperation();
 *   res.json(new ApiResponse(200, 'OK', data));
 * }));
 */
const catchAsync = (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;
