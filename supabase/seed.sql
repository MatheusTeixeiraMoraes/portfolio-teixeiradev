-- Execute no SQL editor do Supabase, depois do schema.sql

insert into public.projects (order_index, reverse, icon_key, color_scheme, pill_label, name, description, tags, metrics, video_path) values
(1, false, 'grid', 'blue', 'SaaS · White Label', 'Tri3FastBoard',
  'Plataforma web desenvolvida do zero para centralizar gestão de clientes, contratos e operações de campo. 3 empresas com marca personalizada, 150+ consultores ativos — sem planilha, sem e-mail.',
  array['React','Supabase','White Label','Google Maps','Smart Routes'],
  '[{"value":"16.387","label":"Clientes","color":"default"},{"value":"R$1.77B","label":"TPV rastreado","color":"green"},{"value":"150+","label":"Consultores","color":"default"}]'::jsonb,
  '/videos/tri3fastboard.mp4'),

(2, true, 'spark', 'purple', 'IA · Automação', 'Agente de IA',
  'Agente inteligente integrado ao app da Mercado Pago que automatiza registro de tarefas e agendamento de visitas — eliminando trabalho manual repetitivo da equipe.',
  array['IA','Automação','API Mercado Pago'],
  '[{"value":"600h","label":"Economizadas/mês","color":"purple"},{"value":"100%","label":"Automatizado","color":"default"}]'::jsonb,
  '/demos/agente-ia-fluxo.html'),

(3, false, 'house', 'blue', 'SaaS · Co-fundador', 'CRM Multi-MCC',
  'SaaS com interface personalizada por segmento (restaurante, salão, farmácia). Integrado à maquininha, com NF-e automática e base de 16k clientes prontos para ativar.',
  array['NF-e','Open Finance','Multi-segmento','Co-fundador'],
  '[{"value":"16k+","label":"Clientes base","color":"default"},{"value":"R$1.77B","label":"Mercado mapeado","color":"green"},{"value":"15","label":"Consultores","color":"default"}]'::jsonb,
  '/videos/crm-multimcc.mp4'),

(4, true, 'pin', 'green', 'Logística · Geolocalização', 'Smart Routes',
  'Sistema de rotas automáticas para visitas a clientes com integração à API do Google Maps e localização em tempo real. 9.590 km percorridos, 63 rotas geradas.',
  array['Google Maps API','Geolocalização','Tempo real'],
  '[{"value":"9.590","label":"km percorridos","color":"green"},{"value":"63","label":"Rotas geradas","color":"green"}]'::jsonb,
  '/videos/smart-routes.mp4'),

(5, false, 'bars', 'blue', 'Dashboard · Score', 'Dashboard de Resultados MP',
  'Score inteligente para 50 consultores da Mercado Pago. Um superior faz upload da planilha e todos visualizam seus resultados individualmente — sem e-mail, sem planilha distribuída.',
  array['Score inteligente','Dashboard','Upload único'],
  '[{"value":"50","label":"Consultores","color":"default"},{"value":"0","label":"Planilhas enviadas","color":"default"}]'::jsonb,
  '/videos/dashboard-mp.mp4');
