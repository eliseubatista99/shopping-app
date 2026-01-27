-- ==========================
-- PRODUCT COMBINATIONS
-- ==========================
CREATE TABLE IF NOT EXISTS product_combinations (
  product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  combined_product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, combined_product_id),
  CHECK (product_id <> combined_product_id)
);

CREATE INDEX IF NOT EXISTS idx_product_combinations_product ON product_combinations (product_id);

WITH
  new_values (product_id, combined_product_id) AS (
    VALUES
      -- Desk setup
      ('prod-001', 'prod-011'),  -- desk + mouse
      ('prod-001', 'prod-013'),  -- desk + keyboard
      ('prod-002', 'prod-011'),
      ('prod-002', 'prod-013'),

      -- Gaming setup
      ('prod-005', 'prod-013'),  -- gaming chair + keyboard
      ('prod-005', 'prod-011'),  -- gaming chair + mouse
      ('prod-006', 'prod-013'),
      ('prod-006', 'prod-011'),

      -- Office setup
      ('prod-007', 'prod-009'),  -- ergonomic chair + lamp
      ('prod-007', 'prod-010'),  -- ergonomic chair + lamp
      ('prod-008', 'prod-009'),
      ('prod-008', 'prod-010'),

      -- Audio setup
      ('prod-015', 'prod-020'),  -- headphones + speaker
      ('prod-015', 'prod-021'),  -- headphones + speaker (waterproof)
      ('prod-020', 'prod-021'),  -- speaker + speaker

      -- Phone setup
      ('prod-016', 'prod-029'),  -- case + smart watch (wearables)
      ('prod-017', 'prod-029'),

      -- Laptop setup
      ('prod-018', 'prod-011'),  -- sleeve + mouse
      ('prod-019', 'prod-012'),  -- sleeve + RGB mouse

      -- Kitchen setup
      ('prod-022', 'prod-023'),  -- coffee maker + air fryer
      ('prod-022', 'prod-024'),  -- coffee maker + yoga mat (breakfast + fitness)
      ('prod-023', 'prod-024'),  -- air fryer + yoga mat

      -- Sports / travel
      ('prod-024', 'prod-026'),  -- yoga mat + backpack
      ('prod-025', 'prod-027'),  -- running shoes + water bottle
      ('prod-026', 'prod-027'),  -- backpack + water bottle

      -- Fashion / wearables
      ('prod-028', 'prod-029'),  -- sunglasses + smart watch
      ('prod-029', 'prod-030')   -- smart watch + wall art (random gift combo)
  )
INSERT INTO
  product_combinations (product_id, combined_product_id)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_combinations p
    WHERE
      p.product_id = new_values.product_id
        AND p.combined_product_id = new_values.combined_product_id
  );
