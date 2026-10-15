/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — the message body
  - `is_read` (boolean, default false) — tracks whether the portfolio owner has read the message
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (visitors can send messages without signing in).
- No SELECT/UPDATE/DELETE for anon — only the portfolio owner should read messages,
  which they do via the Supabase dashboard with the service role key.

3. Notes
- This is a portfolio site with no sign-in screen, so the anon role needs INSERT access
  for the contact form to work.
- Messages are intended to be read only by the portfolio owner through the Supabase
  dashboard, so no anon SELECT policy is provided.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON contact_messages;
CREATE POLICY "anon_insert_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
