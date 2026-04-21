import Link from 'next/link';
import { 
  Zap, 
  Clock,
  Layers,
  CreditCard,
  Globe,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/WaitlistForm';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <Zap className="text-primary-foreground w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-bold tracking-tight uppercase">FlowInvoice</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase font-bold tracking-widest rounded-full" asChild>
            <Link href="#waitlist">Early Access</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-8 animate-in fade-in slide-in-from-bottom-3 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ⚡ Early adopters get 40% off forever
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Invoicing That Works As Fast As You Do
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              FlowInvoice helps freelancers and small agencies send invoices, track payments, and get paid — without the bloat of traditional tools.
            </p>
            
            <div className="max-w-md mx-auto p-8 rounded-3xl border border-border bg-card/10 backdrop-blur-sm shadow-2xl shadow-primary/5 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <div className="mb-6 text-left">
                <h3 className="text-sm font-bold mb-1">Join the Waitlist — It&apos;s Free</h3>
                <p className="text-[11px] text-muted-foreground">No credit card required. Secure your lifetime discount today.</p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border/40 bg-zinc-950/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary mb-4">Sound Familiar?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  pain: "I'm chasing clients for payments every week",
                  sol: "Automated payment reminders via email",
                  icon: AlertCircle
                },
                {
                  pain: "My invoicing tool has 50 features I never use",
                  sol: "Clean, focused UI — only what you actually need",
                  icon: Layers
                },
                {
                  pain: "I don't know which invoices are overdue until it's too late",
                  sol: "Real-time payment status dashboard",
                  icon: Clock
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-border/50 bg-background group hover:border-primary/20 transition-all">
                  <div className="mb-6 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 font-mono italic">The Pain</p>
                      <h4 className="text-sm font-medium leading-relaxed">&quot;{item.pain}&quot;</h4>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 font-mono">The Solution</p>
                      <p className="text-sm font-bold">{item.sol}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything You Need. <br className="hidden md:block"/> Nothing You Don&apos;t.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {[
                {
                  title: 'Instant Invoice Creation',
                  desc: 'Generate professional invoices in under 60 seconds.',
                  icon: Zap
                },
                {
                  title: 'Payment Tracking',
                  desc: 'Know exactly who has paid, who hasn\'t, and who\'s overdue.',
                  icon: CreditCard
                },
                {
                  title: 'Auto Reminders',
                  desc: 'Set it once, let FlowInvoice follow up for you.',
                  icon: Clock
                },
                {
                  title: 'Multi-currency Support',
                  desc: 'Work with international clients without the headache.',
                  icon: Globe
                }
              ].map((feat, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-950/5 flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-bold">{feat.title}</h4>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 border-y border-border/40 bg-zinc-950/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I switched from FreshBooks and saved 4 hours a week. Genuinely.",
                  author: "Sarah K.",
                  role: "Freelance Designer"
                },
                {
                  quote: "Finally an invoicing tool that doesn't feel like it was built in 2012.",
                  author: "Marcus T.",
                  role: "Digital Agency Owner"
                },
                {
                  quote: "Got paid 3 days faster on average after switching. The reminders actually work.",
                  author: "Priya M.",
                  role: "Brand Consultant"
                }
              ].map((t, i) => (
                <div key={i} className="p-8 rounded-3xl border border-border/50 bg-background flex flex-col justify-between">
                  <p className="text-sm leading-relaxed mb-8 italic text-muted-foreground/80">&quot;{t.quote}&quot;</p>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest">{t.author}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 opacity-60 font-medium">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 md:py-48">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div id="waitlist" className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Simple Pricing. <br/> Insane Early Bird Value.</h2>
              <p className="text-muted-foreground text-[15px] mb-12">
                We&apos;re not live yet — but when we are, early waitlist members lock in <span className="text-foreground font-bold">40% off forever.</span> No negotiations later.
              </p>
              
              <div className="p-8 md:p-12 rounded-[2.5rem] border border-border bg-background shadow-2xl shadow-primary/5">
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2">Claim Your Spot Now</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary font-mono animate-pulse">Limited Slots Remaining</p>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-border/40 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-primary w-4 h-4 fill-current" />
                <span className="text-xs font-bold tracking-tight uppercase">FlowInvoice</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed max-w-xs">
                The high-performance billing engine for independent talent and modern agencies.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">Product</h5>
              <ul className="space-y-3 text-[11px] text-muted-foreground font-medium">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">Legal</h5>
              <ul className="space-y-3 text-[11px] text-muted-foreground font-medium">
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">Support</h5>
              <ul className="space-y-3 text-[11px] text-muted-foreground font-medium">
                <li><a href="mailto:hello@flowinvoice.com" className="hover:text-foreground">hello@flowinvoice.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-muted-foreground font-mono">
              © 2026 FlowInvoice. Built for the modern workforce.
            </p>
            <div className="flex gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest italic opacity-50">
              <span>Fast</span>
              <span>Minimal</span>
              <span>Focused</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
