-- Creates table if not exists
CREATE TABLE IF NOT EXISTS test (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  localidade VARCHAR(100)
);

-- Adds three test persons
INSERT INTO test (nome, idade, localidade)
VALUES
  ('João Silva', 28, 'Lisboa'),
  ('Maria Fernandes', 34, 'Porto'),
  ('Rui Costa', 41, 'Coimbra')
ON CONFLICT DO NOTHING;
