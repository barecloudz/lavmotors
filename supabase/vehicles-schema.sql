-- ============================================
-- LAV Motors — Vehicles & Site Settings
-- Run this in your Supabase SQL Editor
-- ============================================

-- Vehicles (consignment inventory)
create table if not exists vehicles (
  id uuid default gen_random_uuid() primary key,
  year integer not null,
  make text not null,
  model text not null,
  trim text,
  mileage integer,
  price integer,
  description text,
  photos text[] default '{}',
  status text not null default 'available', -- available | pending | sold
  featured boolean not null default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Site settings (key-value)
create table if not exists site_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz default now()
);

-- RLS
alter table vehicles enable row level security;
alter table site_settings enable row level security;

-- Public: read all non-archived vehicles
create policy "Public can read vehicles"
  on vehicles for select using (true);

-- Authenticated: full vehicle access
create policy "Authenticated users manage vehicles"
  on vehicles for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Public: read settings
create policy "Public can read settings"
  on site_settings for select using (true);

-- Authenticated: manage settings
create policy "Authenticated users manage settings"
  on site_settings for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Default settings
insert into site_settings (key, value)
values ('vehicles_enabled', 'false')
on conflict (key) do nothing;
