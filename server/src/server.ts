import app from './app.ts';
import connectDB from './db/connectDB.ts';
import config from './config/index.ts';

async function bootstrap(): Promise<void> {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
      console.log(`   Environment : ${config.env}`);
      console.log(`   Health check: http://localhost:${config.port}/api/v1/health`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

bootstrap();
