-- ==========================
-- ORDERS
-- ==========================
CREATE TABLE
  IF NOT EXISTS orders (
    id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL REFERENCES users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL,
    status_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    payment_method_id VARCHAR(100) REFERENCES payment_methods(id),
    address_id VARCHAR(100) REFERENCES addresses(id),
    product_cost DOUBLE PRECISION,
    shipping_cost DOUBLE PRECISION,
    total_cost DOUBLE PRECISION,
    discounts DOUBLE PRECISION
  );
WITH
  new_values (id, user_id,  status, payment_method_id,address_id,product_cost, shipping_cost,total_cost,discounts) AS (
    VALUES
      (
        'order54274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        'None',
        'method54274a-6083-47de-a8eb-133d248ee0f8',
        '5t44274a-6083-47de-a8eb-133d248ee0f8',
        30,
        0,
        25,
        5
      )
  )
INSERT INTO
  orders (id, user_id,  status, payment_method_id,address_id,product_cost, shipping_cost,total_cost,discounts)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      orders a
    WHERE
      a.id = new_values.id
  );