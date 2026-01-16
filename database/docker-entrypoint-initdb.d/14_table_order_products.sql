-- ==========================
-- ORDER PRODUCTS
-- ==========================
CREATE TABLE
  order_products (
    order_id VARCHAR(100) NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, order_id)
  );

CREATE INDEX idx_order_products_order ON order_products (order_id);

WITH
  new_values (order_id, product_id) AS (
    VALUES
      (
        'order54274a-6083-47de-a8eb-133d248ee0f8',
        'crazy274a-6083-47de-a8eb-133d248ee0f8'
      ),
      (
        'order54274a-6083-47de-a8eb-133d248ee0f8',
        'atlas274a-6083-47de-a8eb-133d248ee0f8'
      )
  )
INSERT INTO
  order_products (order_id, product_id)
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