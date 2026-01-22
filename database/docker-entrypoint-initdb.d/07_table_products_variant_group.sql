-- ==========================
-- PRODUCT VARIANT GROUPS
-- ==========================
CREATE TABLE
  IF NOT EXISTS product_variant_groups (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    is_db_active BOOLEAN NOT NULL DEFAULT TRUE
  );

WITH
  new_values (id, name) AS (
    VALUES
      ('pvg-001', 'Office Desk'),
      ('pvg-002', 'Standing Desk'),
      ('pvg-003', 'Gaming Chair'),
      ('pvg-004', 'Ergonomic Chair'),
      ('pvg-005', 'LED Desk Lamp'),
      ('pvg-006', 'Wireless Mouse'),
      ('pvg-007', 'Mechanical Keyboard'),
      ('pvg-008', 'Noise Cancelling Headphones'),
      ('pvg-009', 'Smartphone Case'),
      ('pvg-010', 'Laptop Sleeve'),
      ('pvg-011', 'Bluetooth Speaker'),
      ('pvg-012', 'Coffee Maker'),
      ('pvg-013', 'Air Fryer'),
      ('pvg-014', 'Yoga Mat'),
      ('pvg-015', 'Running Shoes'),
      ('pvg-016', 'Backpack'),
      ('pvg-017', 'Water Bottle'),
      ('pvg-018', 'Sunglasses'),
      ('pvg-019', 'Smart Watch'),
      ('pvg-020', 'Wall Art Poster')
  )
INSERT INTO
  product_variant_groups (id, name)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_variant_groups g
    WHERE
      g.id = new_values.id
  );
