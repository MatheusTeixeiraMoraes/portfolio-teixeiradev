-- Execute no SQL editor do Supabase

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  order_index integer not null default 0,
  reverse boolean not null default false,
  icon_key text not null default 'grid',
  color_scheme text not null default 'blue',
  pill_label text not null,
  name text not null,
  description text not null,
  tags text[] not null default '{}',
  metrics jsonb not null default '[]',
  video_path text not null,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

-- Leitura pública (qualquer visitante do site pode ver os projetos)
create policy "projects_select_public"
  on public.projects for select
  using (true);

-- Escrita apenas para usuários autenticados (admin)
create policy "projects_write_authenticated"
  on public.projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
