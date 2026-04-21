-- Database Setup for FlowInvoice
-- Run this in your Supabase SQL Editor

-- 1. Create the Waitlist Table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Set up Row Level Security (RLS)
-- Allow public insertions (for the waitlist form)
-- But restrict reading to authenticated owners or admins
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert into waitlist" 
ON waitlist FOR INSERT 
WITH CHECK (true);

-- 3. OPTIONAL: Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
