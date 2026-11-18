-- ========================================================
-- SCHEMA SQL PARA O SUPABASE (PostgreSQL)
-- Chá de Bebê do João Felipe (Victoria & Felipe)
-- ========================================================

-- 1. Criação da Tabela de Presentes
CREATE TABLE IF NOT EXISTS public.presentes (
    id TEXT PRIMARY KEY,
    titulo TEXT NOT NULL,
    categoria TEXT NOT NULL,
    descricao TEXT,
    imagem_url TEXT,
    link_loja TEXT,
    sugestao TEXT,
    status TEXT DEFAULT 'disponivel', -- 'disponivel' ou 'reservado'
    reservado_por TEXT,
    telefone_convidado TEXT,
    recado TEXT,
    reservado_em TIMESTAMP WITH TIME ZONE,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitação de Row Level Security (RLS)
ALTER TABLE public.presentes ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de Acesso Público (Leitura livre e Reserva pública)
-- Permite que qualquer convidado leia a lista de presentes
CREATE POLICY "Permitir leitura publica de presentes"
ON public.presentes FOR SELECT
USING (true);

-- Permite que convidados façam reservas e atualizem status
CREATE POLICY "Permitir reserva publica de presentes"
ON public.presentes FOR UPDATE
USING (true)
WITH CHECK (true);

-- Permite inserção de novos presentes (caso use área administrativa)
CREATE POLICY "Permitir criacao de presentes"
ON public.presentes FOR INSERT
WITH CHECK (true);

-- 4. Habilitação de Realtime (para atualizar a tela de todos simultaneamente)
ALTER PUBLICATION supabase_realtime ADD TABLE public.presentes;
