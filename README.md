# FlowInvoice ⚡️

FlowInvoice is a modern, high-performance invoicing and waitlist platform built with **Next.js**, **Supabase**, and **Resend**.

## 🚀 Features

- **Premium Landing Page**: A Linear-inspired aesthetic with high-converted UI.
- **Integrated Waitlist**: Secure Server Action logic for capturing early-access leads.
- **Email Confirmations**: Automated "Welcome" emails sent via Resend API.
- **Real-time Database**: Powered by Supabase (PostgreSQL).
- **Health Monitoring**: Built-in `/api/health` route for system status.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org)
- **Database & Auth**: [Supabase](https://supabase.com)
- **Email**: [Resend](https://resend.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Validation**: [Zod](https://zod.dev)

## 🚦 Getting Started

### 1. Database Setup
Run the following SQL in your Supabase dashboard to initialize the required tables:

```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text unique not null,
  created_at timestamp with time zone default now()
);
```

### 2. Environment Variables
Create a `.env.local` file in the `client` directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_anon_key
RESEND_API_KEY=your_resend_api_key
CONFIRMATION_EMAIL_FROM=onboarding@resend.dev
```

### 3. Installation & Development
```bash
bun install
bun dev
```

## 📈 Architecture

FlowInvoice uses a **consolidated Next.js architecture**. All backend logic is handled via **Server Actions** and **API Routes**, eliminating the need for a separate server folder.

---

Built with ❤️ by Antigravity
