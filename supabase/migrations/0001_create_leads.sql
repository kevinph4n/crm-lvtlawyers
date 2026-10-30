-- Leads captured by the website contact form.
-- Run once in Supabase > SQL Editor.
--
-- Downstream: Supabase Database Webhook (INSERT on leads) -> Zapier -> Google Sheets -> Power BI.
-- Zapier and the Sheet map these column names; renaming one breaks the pipeline silently.
-- legal_field values must match src/data/practice-areas.ts exactly.

create table public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  full_name   text not null check (char_length(full_name) between 1 and 120),
  phone       text not null check (char_length(phone) between 9 and 20),
  email       text check (email is null or char_length(email) <= 200),
  legal_field text not null check (legal_field in (
    'Tư vấn doanh nghiệp',
    'Sở hữu trí tuệ',
    'Đất đai - Bất động sản',
    'Hình sự',
    'Dân sự - Hôn nhân gia đình',
    'Thu hồi nợ',
    'Lĩnh vực khác'
  )),
  message     text check (message is null or char_length(message) <= 4000),
  -- Updated by staff in the Table Editor; the website never sets it.
  status      text not null default 'Khách hàng mới' check (status in (
    'Khách hàng mới',
    'Đang tư vấn',
    'Đã ký hợp đồng'
  ))
);

alter table public.leads enable row level security;

-- The browser uses the public anon/publishable key: it may insert form columns only,
-- never read leads back and never choose id, created_at or status.
revoke all on public.leads from anon, authenticated;
grant insert (full_name, phone, email, legal_field, message) on public.leads to anon;

create policy "Website can submit leads"
  on public.leads for insert
  to anon
  with check (true);
