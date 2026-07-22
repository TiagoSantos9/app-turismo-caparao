-- Migração 002: campos exibidos na tela de detalhes do protótipo Figma
-- que ainda não existiam no schema (dificuldade e duração estimada).
--
-- Ambos são NULLable de propósito: locais já cadastrados continuam
-- funcionando normalmente (a UI trata a ausência do valor mostrando
-- "—" / ocultando o badge), sem quebrar nada em produção.

ALTER TABLE locais
  ADD COLUMN dificuldade ENUM('facil', 'moderado', 'dificil') NULL
    COMMENT 'Nível de dificuldade exibido na tela de detalhes (ex: trilhas)',
  ADD COLUMN duracao_minutos INT UNSIGNED NULL
    COMMENT 'Duração estimada da visita/trilha, em minutos';

-- Exemplos de preenchimento manual (ajuste os IDs para os locais reais
-- do seu banco). Rode um UPDATE por local depois de decidir os valores:
--
-- UPDATE locais SET dificuldade = 'dificil', duracao_minutos = 360 WHERE id = 1; -- Pico da Bandeira, 6h
-- UPDATE locais SET dificuldade = 'facil',   duracao_minutos = 90  WHERE id = 2; -- Vale Encantado
--
-- Consulte os IDs reais com:
-- SELECT id, nome FROM locais;
