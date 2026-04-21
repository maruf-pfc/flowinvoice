import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes/index.ts';
import globalErrorHandler from './middlewares/globalErrorHandler.ts';
import notFound from './middlewares/notFound.ts';

const app: Application = express();

// ─── Global Middlewares ───────────────────────────────────────────────────────

// 1. Security HTTP headers
app.use(helmet());

// 2. CORS — configure origins as needed for your project
app.use(cors());

// 3. HTTP request logger
app.use(morgan('dev'));

// 4. Parse incoming JSON bodies
app.use(express.json());

// 5. Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────────────────────

// Root ping
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: '🚀 Express DDD Starter is running!' });
});

// All module routes mounted at /api/v1
app.use('/api/v1', router);

// ─── Error Handling ───────────────────────────────────────────────────────────

// 404 handler — after all routes
app.use(notFound);

// Global error handler — very last middleware
app.use(globalErrorHandler);

export default app;
