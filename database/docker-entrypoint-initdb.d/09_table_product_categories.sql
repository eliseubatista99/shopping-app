-- ==========================
-- PRODUCT CATEGORIES
-- ==========================
CREATE TABLE
  IF NOT EXISTS product_categories (
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    category_id VARCHAR(100) NOT NULL REFERENCES categories (id) ON DELETE CASCADE,
    is_main BOOLEAN,
    PRIMARY KEY (product_id, category_id)
  );

CREATE INDEX IF NOT EXISTS idx_categories ON product_categories (category_id);

WITH
  new_values (product_id, category_id, is_main) AS (
    VALUES
      ('prod-001', 'cat-001', TRUE),
      ('prod-001', 'cat-014', FALSE),
      ('prod-001', 'cat-011', FALSE),

      ('prod-002', 'cat-001', TRUE),
      ('prod-002', 'cat-011', FALSE),
      ('prod-002', 'cat-014', FALSE),

      ('prod-003', 'cat-001', TRUE),
      ('prod-003', 'cat-014', FALSE),
      ('prod-003', 'cat-015', FALSE),

      ('prod-004', 'cat-001', TRUE),
      ('prod-004', 'cat-011', FALSE),
      ('prod-004', 'cat-014', FALSE),

      ('prod-005', 'cat-004', TRUE),
      ('prod-005', 'cat-015', FALSE),
      ('prod-005', 'cat-009', FALSE),

      ('prod-006', 'cat-004', TRUE),
      ('prod-006', 'cat-011', FALSE),
      ('prod-006', 'cat-014', FALSE),

      ('prod-007', 'cat-004', TRUE),
      ('prod-007', 'cat-014', FALSE),
      ('prod-007', 'cat-013', FALSE),

      ('prod-008', 'cat-004', TRUE),
      ('prod-008', 'cat-015', FALSE),
      ('prod-008', 'cat-014', FALSE),

      ('prod-009', 'cat-001', TRUE),
      ('prod-009', 'cat-014', FALSE),
      ('prod-009', 'cat-011', FALSE),

      ('prod-010', 'cat-001', TRUE),
      ('prod-010', 'cat-011', FALSE),
      ('prod-010', 'cat-014', FALSE),

      ('prod-011', 'cat-003', TRUE),
      ('prod-011', 'cat-014', FALSE),
      ('prod-011', 'cat-011', FALSE),

      ('prod-012', 'cat-003', TRUE),
      ('prod-012', 'cat-015', FALSE),
      ('prod-012', 'cat-014', FALSE),

      ('prod-013', 'cat-003', TRUE),
      ('prod-013', 'cat-011', FALSE),
      ('prod-013', 'cat-014', FALSE),

      ('prod-014', 'cat-003', TRUE),
      ('prod-014', 'cat-015', FALSE),
      ('prod-014', 'cat-014', FALSE),

      ('prod-015', 'cat-003', TRUE),
      ('prod-015', 'cat-014', FALSE),
      ('prod-015', 'cat-015', FALSE),

      ('prod-016', 'cat-003', TRUE),
      ('prod-016', 'cat-011', FALSE),
      ('prod-016', 'cat-014', FALSE),

      ('prod-017', 'cat-003', TRUE),
      ('prod-017', 'cat-015', FALSE),
      ('prod-017', 'cat-014', FALSE),

      ('prod-018', 'cat-003', TRUE),
      ('prod-018', 'cat-014', FALSE),
      ('prod-018', 'cat-011', FALSE),

      ('prod-019', 'cat-003', TRUE),
      ('prod-019', 'cat-011', FALSE),
      ('prod-019', 'cat-014', FALSE),

      ('prod-020', 'cat-003', TRUE),
      ('prod-020', 'cat-014', FALSE),
      ('prod-020', 'cat-012', FALSE),

      ('prod-021', 'cat-003', TRUE),
      ('prod-021', 'cat-015', FALSE),
      ('prod-021', 'cat-014', FALSE),

      ('prod-022', 'cat-005', TRUE),
      ('prod-022', 'cat-014', FALSE),
      ('prod-022', 'cat-011', FALSE),

      ('prod-023', 'cat-005', TRUE),
      ('prod-023', 'cat-014', FALSE),
      ('prod-023', 'cat-009', FALSE),

      ('prod-024', 'cat-006', TRUE),
      ('prod-024', 'cat-014', FALSE),
      ('prod-024', 'cat-011', FALSE),

      ('prod-025', 'cat-006', TRUE),
      ('prod-025', 'cat-011', FALSE),
      ('prod-025', 'cat-014', FALSE),

      ('prod-026', 'cat-006', TRUE),
      ('prod-026', 'cat-014', FALSE),
      ('prod-026', 'cat-013', FALSE),

      ('prod-027', 'cat-006', TRUE),
      ('prod-027', 'cat-014', FALSE),
      ('prod-027', 'cat-011', FALSE),

      ('prod-028', 'cat-004', TRUE),
      ('prod-028', 'cat-015', FALSE),
      ('prod-028', 'cat-014', FALSE),

      ('prod-029', 'cat-003', TRUE),
      ('prod-029', 'cat-014', FALSE),
      ('prod-029', 'cat-011', FALSE),

      ('prod-030', 'cat-004', TRUE),
      ('prod-030', 'cat-011', FALSE),
      ('prod-030', 'cat-014', FALSE)
  )
INSERT INTO
  product_categories (product_id, category_id, is_main)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_categories p
    WHERE
      p.product_id = new_values.product_id
        AND p.category_id = new_values.category_id
  );
