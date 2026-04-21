import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();
    
    // Simple check for Supabase connectivity
    const { error } = await supabase.from('_dummy_').select('count', { count: 'exact', head: true }).limit(1).maybeSingle();
    
    // If table doesn't exist, it means connection is alive but DB is empty/unstructured
    const isConnected = !error || (error && error.code === 'PGRST204') || (error && error.message.includes('relation'));

    return NextResponse.json({
      status: isConnected ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      uptime: `${Math.floor(process.uptime())}s`,
      database: isConnected ? 'connected' : 'disconnected',
      environment: process.env['NODE_ENV'],
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Health check failed' },
      { status: 500 }
    );
  }
}
