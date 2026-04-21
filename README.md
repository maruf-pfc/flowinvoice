# FlowInvoice ⚡️

FlowInvoice is a modern, high-performance invoicing and waitlist platform built with **Next.js**, **Supabase**, and **Resend**.

[![Stack](https://img.shields.io/badge/Stack-Next.js%20%2B%20Supabase%20%2B%20Resend-blue)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

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

## 📂 Project Structure

The project has been consolidated into a unified Next.js workspace:

```text
├── app/                  # Next.js App Router (Pages & API)
│   ├── actions/          # Server Actions (Waitlist logic)
│   └── api/              # API Routes (Health checks)
├── components/           # React Components
│   └── ui/               # shadcn/ui components
├── lib/                  # Shared utilities (Supabase/Resend clients)
├── public/               # Static assets
├── requirements.md       # Project requirements & goals
└── supabase_setup.sql    # Database schema for Supabase
```

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
Create a `.env` file in the **root** directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_anon_key

RESEND_API_KEY=your_resend_api_key
CONFIRMATION_EMAIL_FROM=onboarding@resend.dev
```

### 3. Installation & Development
Install dependencies and start the development server:

```bash
bun install
bun dev
```

## 🏗️ Architecture

### Server Actions
Waitlist submissions are handled via **Next.js Server Actions** (`app/actions/waitlist.ts`). This ensures:
- **Zero API Overload**: No need for a separate Express server.
- **Type Safety**: End-to-end types from form to database.
- **Security**: Logic runs exclusively on the server.

### Monitoring
Monitor your system and database connectivity via:
`GET /api/health`

## 🗺️ Roadmap

- [x] Initial Migration to Supabase
- [x] Consolidated Architectue
- [x] Waitlist System & Email Integration
- [ ] User Authentication (Supabase Auth)
- [ ] Invoice Generation Dashboard
- [ ] Multi-currency Support
