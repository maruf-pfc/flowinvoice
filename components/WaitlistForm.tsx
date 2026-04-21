'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { joinWaitlist } from '@/app/actions/waitlist';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);

      const result = await joinWaitlist(formData);

      if (result.success) {
        toast.success(result.message);
        setIsSubmitted(true);
        reset();
      } else {
        toast.error(
          typeof result.message === 'string'
            ? result.message
            : 'Submission failed'
        );
      }
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center px-6 py-10 rounded-2xl border bg-muted/30 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>

        <h3 className="text-xl font-semibold mb-2">
          You&apos;re on the list
        </h3>

        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          We&apos;ll notify you when FlowInvoice launches. Early adopters get
          40% off — forever.
        </p>

        {/* Development Notification Note */}
        <div className="mt-6 mx-auto max-w-md p-4 bg-primary/5 border border-primary/20 rounded-lg text-left">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-primary">Note for testers:</span> If you didn't receive a confirmation email, it is because this project uses Resend's free tier. 
            Resend <a href="https://resend.com/docs/dashboard/emails/sandbox" target="_blank" rel="noreferrer" className="underline hover:text-primary">sandbox domains</a> only allow sending emails to your verified Resend account email address to prevent spam.
          </p>
        </div>

        <button
          className="mt-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsSubmitted(false)}
        >
          Submit another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Name */}
      <div className="space-y-2 text-left">
        <Label htmlFor="name" className="text-sm text-muted-foreground">
          Full name
        </Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register('name')}
          disabled={isPending}
          className="h-11 bg-background border-border focus-visible:ring-1 focus-visible:ring-primary"
        />
        {errors.name && (
          <p className="text-xs text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2 text-left">
        <Label htmlFor="email" className="text-sm text-muted-foreground">
          Email address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          disabled={isPending}
          className="h-11 bg-background border-border focus-visible:ring-1 focus-visible:ring-primary"
        />
        {errors.email && (
          <p className="text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* CTA */}
      <Button
        type="submit"
        className="w-full h-11 text-sm font-medium"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          'Join the waitlist'
        )}
      </Button>

      {/* Trust note */}
      <p className="text-xs text-center text-muted-foreground pt-2">
        No spam. Just product updates and early access.
      </p>
    </form>
  );
}