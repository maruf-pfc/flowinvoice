import WaitlistForm from '@/components/WaitlistForm';

export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="z-10 max-w-md w-full items-center justify-between font-mono text-sm flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Waitlist System Test</h1>
          <p className="text-muted-foreground">
            Use the form below to test the Supabase & Resend integration.
          </p>
        </div>
        
        <div className="w-full bg-card border rounded-2xl p-8 shadow-sm">
          <WaitlistForm />
        </div>

        <div className="w-full flex justify-center">
          <a
            href="/api/health"
            target="_blank"
            className="text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-1"
          >
            Health check
            <span className="opacity-50">→</span>
            <span className="font-mono text-[11px]">/api/health</span>
          </a>
        </div>
      </div>
    </main>
  );
}
