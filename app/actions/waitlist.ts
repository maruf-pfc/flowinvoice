'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { resend } from '@/lib/email';
import { getWaitlistEmailHtml } from '@/lib/email-templates';
import { revalidatePath } from 'next/cache';

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

export async function joinWaitlist(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  const validatedFields = waitlistSchema.safeParse({ name, email });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid fields. Please check your input.',
    };
  }

  const supabase = await createClient();

  // 2. Check if already exists
  const { data: existingEntry } = await supabase
    .from('waitlist')
    .select('id')
    .eq('email', email)
    .single();

  if (existingEntry) {
    return {
      error: true,
      message: 'You are already on the waitlist!',
    };
  }

  // 3. Insert into Supabase
  const { error: insertError } = await supabase
    .from('waitlist')
    .insert([{ name, email }]);

  if (insertError) {
    console.error('Supabase Error:', insertError);
    return {
      error: true,
      message: 'Something went wrong. Please try again later.',
    };
  }

  // 4. Send Confirmation Email
  try {
    if (process.env['RESEND_API_KEY']) {
      await resend.emails.send({
        from: process.env['CONFIRMATION_EMAIL_FROM'] || 'waitlist@flowinvoice.com',
        to: email,
        subject: 'You are on the list! 🎉 - FlowInvoice',
        html: getWaitlistEmailHtml(name),
      });
    }
  } catch (emailError) {
    console.error('Email Error:', emailError);
    // We don't fail the whole action if email fails
  }

  revalidatePath('/');
  return {
    success: true,
    message: 'Welcome to the waitlist! Check your inbox soon. 🎉',
  };
}
