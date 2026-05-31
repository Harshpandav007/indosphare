-- Run this in Supabase Dashboard → SQL Editor → New Query
CREATE TABLE IF NOT EXISTS inquiries (
  id               BIGSERIAL PRIMARY KEY,
  full_name        TEXT NOT NULL,
  company_name     TEXT NOT NULL,
  email            TEXT NOT NULL,
  phone            TEXT,
  country          TEXT NOT NULL,
  product_interest TEXT NOT NULL,
  quantity         TEXT,
  message          TEXT,
  status           TEXT NOT NULL DEFAULT 'new',
  ip_address       TEXT,
  submitted_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_inquiries_email     ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_status    ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_submitted ON inquiries(submitted_at DESC);
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert"       ON inquiries FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated read"  ON inquiries FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON inquiries FOR UPDATE TO authenticated USING (true);
