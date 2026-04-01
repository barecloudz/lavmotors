-- ============================================
-- LAV Motors Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- Blog posts
create table if not exists blog_posts (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text not null,
  content text not null default '',
  date_published date not null,
  read_time text not null default '5 min read',
  published boolean not null default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Contact form submissions
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  service text,
  vehicle text,
  message text not null,
  read boolean not null default false,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table blog_posts enable row level security;
alter table contact_submissions enable row level security;

-- Public: read published posts
create policy "Public can read published posts"
  on blog_posts for select
  using (published = true);

-- Authenticated (admin): full access to blog posts
create policy "Authenticated users manage blog posts"
  on blog_posts for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Public: submit contact form
create policy "Anyone can submit contact form"
  on contact_submissions for insert
  with check (true);

-- Authenticated (admin): full access to contact submissions
create policy "Authenticated users manage contacts"
  on contact_submissions for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ============================================
-- Seed: existing blog posts (metadata only)
-- Add full content via the admin editor
-- ============================================
insert into blog_posts (slug, title, description, date_published, read_time, published, content)
values
  (
    'professional-automotive-services',
    'Discover Professional Automotive Services for Your Car',
    'Learn what it takes to keep your vehicle running smoothly and safely with professional auto services from LAV Motors in Hendersonville, NC.',
    '2025-11-24',
    '4 min read',
    true,
    '<p>Owning a car is a great convenience, but keeping it in top shape requires more than just occasional washing and refueling.</p>'
  ),
  (
    'enhance-your-ride',
    'Enhance Your Ride with Professional Automotive Services',
    'Whether you need routine maintenance or a major repair, expert care can make all the difference. Discover how LAV Motors keeps your vehicle in peak condition.',
    '2025-11-10',
    '3 min read',
    true,
    '<p>Owning a car is more than just having a way to get from point A to point B.</p>'
  ),
  (
    'wheel-and-tire-services',
    'Expert Wheel and Tire Services for Your Vehicle',
    'Learn how expert wheel and tire care ensures safety, performance, and peace of mind. LAV Motors offers comprehensive tire services in Hendersonville, NC.',
    '2025-11-10',
    '4 min read',
    true,
    '<p>When it comes to keeping your car safe and running smoothly, few things are as important as your wheels and tires.</p>'
  )
on conflict (slug) do nothing;
