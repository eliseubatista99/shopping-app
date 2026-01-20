-- ==========================
-- RELATED PRODUCTS
-- ==========================
CREATE TABLE IF NOT EXISTS related_products (
  product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  related_product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, related_product_id),
  CHECK (product_id <> related_product_id)
);

CREATE INDEX IF NOT EXISTS idx_related_products_product ON related_products (product_id);

WITH
  new_values (product_id, related_product_id) AS (
    VALUES
      -- Gaming chairs (same group)
      ('prod-005', 'prod-006'),
      ('prod-006', 'prod-005'),

      -- Ergonomic chairs (same group)
      ('prod-007', 'prod-008'),
      ('prod-008', 'prod-007'),

      -- Desks (same group)
      ('prod-001', 'prod-002'),
      ('prod-002', 'prod-001'),

      ('prod-003', 'prod-004'),
      ('prod-004', 'prod-003'),

      -- Accessories (mouse + keyboard)
      ('prod-011', 'prod-012'),
      ('prod-012', 'prod-011'),

      -- Mouse with headphones (similar desktop setup)
      ('prod-011', 'prod-015'),
      ('prod-015', 'prod-011'),

      -- Speakers related to headphones
      ('prod-015', 'prod-020'),
      ('prod-020', 'prod-015'),

      -- Phone cases (same group)
      ('prod-016', 'prod-017'),
      ('prod-017', 'prod-016'),

      -- Laptop sleeves (same group)
      ('prod-018', 'prod-019'),
      ('prod-019', 'prod-018'),

      -- Kitchen appliances (same category)
      ('prod-022', 'prod-023'),
      ('prod-023', 'prod-022'),

      -- Sports items (same category)
      ('prod-024', 'prod-025'),
      ('prod-025', 'prod-024'),

      -- Backpack + water bottle (outdoor / travel)
      ('prod-026', 'prod-027'),
      ('prod-027', 'prod-026'),

      -- Sunglasses + smart watch (wearables)
      ('prod-028', 'prod-029'),
      ('prod-029', 'prod-028')
  )
INSERT INTO
  related_products (product_id, related_product_id)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      related_products p
    WHERE
      p.product_id = new_values.product_id
        AND p.related_product_id = new_values.related_product_id
  );
