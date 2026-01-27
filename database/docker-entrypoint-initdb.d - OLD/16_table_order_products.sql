-- ==========================
-- ORDER PRODUCTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS order_products (
    order_id VARCHAR(100) NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    quantity INTEGER,
    PRIMARY KEY (product_id, order_id)
  );

CREATE INDEX IF NOT EXISTS idx_order_products_order ON order_products (order_id);

WITH
  new_values (order_id, product_id, quantity) AS (
    VALUES
      -- order-0001 (Delivered)  -> small office setup
      ('order-0001', 'prod-009', 1),
      ('order-0001', 'prod-011', 1),

      -- order-0002 (Delivered) -> full gaming setup
      ('order-0002', 'prod-005', 1),
      ('order-0002', 'prod-013', 1),
      ('order-0002', 'prod-012', 1),

      -- order-0003 (Shipped) -> desk + lamp
      ('order-0003', 'prod-001', 1),
      ('order-0003', 'prod-010', 1),

      -- order-0004 (Paid) -> standing desk + ergonomic chair
      ('order-0004', 'prod-003', 1),
      ('order-0004', 'prod-007', 1),

      -- order-0005 (Cancelled) -> cancelled order (1 item)
      ('order-0005', 'prod-024', 2),

      -- order-0006 (Delivered) -> kitchen appliance
      ('order-0006', 'prod-023', 1),

      -- order-0007 (Paid) -> travel gear
      ('order-0007', 'prod-026', 1),
      ('order-0007', 'prod-027', 1),

      -- order-0008 (Shipped) -> audio bundle
      ('order-0008', 'prod-015', 1),
      ('order-0008', 'prod-020', 1),

      -- order-0009 (Delivered) -> phone accessories
      ('order-0009', 'prod-016', 1),
      ('order-0009', 'prod-017', 1),

      -- order-0010 (Returned) -> returned order (1 item)
      ('order-0010', 'prod-021', 1),

      -- order-0011 (Pending) -> pending order (multiple)
      ('order-0011', 'prod-004', 1),
      ('order-0011', 'prod-008', 1),
      ('order-0011', 'prod-014', 1),

      -- order-0012 (Paid) -> smartwatch + accessories
      ('order-0012', 'prod-029', 1),
      ('order-0012', 'prod-016', 1),

      -- order-0013 (Delivered) -> wall art + desk lamp
      ('order-0013', 'prod-030', 1),
      ('order-0013', 'prod-009', 1)
  )
INSERT INTO
  order_products (order_id, product_id, quantity)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      order_products a
    WHERE
      a.product_id = new_values.product_id
        AND a.order_id = new_values.order_id
  );
