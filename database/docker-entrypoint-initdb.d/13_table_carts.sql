-- ==========================
-- CARTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS carts (
    id VARCHAR(100) PRIMARY KEY,
    product_id VARCHAR(100) REFERENCES products (id),
    user_id VARCHAR(100) REFERENCES users (id),
    quantity INTEGER NOT NULL,
    is_selected BOOLEAN
  );

WITH
  new_values (id, product_id, user_id, quantity, is_selected) AS (
    VALUES
      ('cart-001', 'prod-001', 'user-0001', 1, TRUE),
      ('cart-002', 'prod-005', 'user-0001', 1, FALSE),
      ('cart-003', 'prod-011', 'user-0001', 2, TRUE),
      ('cart-004', 'prod-013', 'user-0001', 1, TRUE),
      ('cart-005', 'prod-015', 'user-0001', 1, TRUE),
      ('cart-006', 'prod-018', 'user-0001', 4, TRUE),
      ('cart-007', 'prod-024', 'user-0001', 1, TRUE),
      ('cart-008', 'prod-029', 'user-0001', 1, TRUE)
  )
INSERT INTO
  carts (id, product_id, user_id, quantity, is_selected)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      carts a
    WHERE
      a.id = new_values.id
  );
