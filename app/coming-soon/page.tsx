import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased text-center items-center justify-center p-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Zap className="text-primary w-6 h-6 fill-current" />
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        Coming Soon
      </h1>
      <p className="text-muted-foreground max-w-sm mb-8">
        This page is currently under construction. Check back soon!
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
