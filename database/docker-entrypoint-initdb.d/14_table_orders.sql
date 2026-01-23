-- ==========================
-- ORDERS
-- ==========================
CREATE TABLE IF NOT EXISTS orders (
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
  new_values (
    id,
    user_id,
    created_at,
    status,
    status_date,
    payment_method_id,
    address_id,
    product_cost,
    shipping_cost,
    total_cost,
    discounts
  ) AS (
    VALUES
      ('order-0001', 'user-0001', TIMESTAMPTZ '2025-01-01 10:00:00+00', 'Delivered',   TIMESTAMPTZ '2025-01-04 10:00:00+00', 'pm-visa-0001',       'address-001',  79.98,  10.98,  90.96,  0.00),
      ('order-0002', 'user-0001', TIMESTAMPTZ '2025-01-02 11:00:00+00', 'Delivered',   TIMESTAMPTZ '2025-01-05 11:00:00+00', 'pm-mastercard-0002', 'address-001', 314.97,  21.97, 336.94,  0.00),
      ('order-0003', 'user-0001', TIMESTAMPTZ '2025-01-03 12:00:00+00', 'Sent',        TIMESTAMPTZ '2025-01-04 12:00:00+00', 'pm-amex-0003',       'address-002', 289.98,  20.98, 310.96,  0.00),
      ('order-0004', 'user-0001', TIMESTAMPTZ '2025-01-04 13:00:00+00', 'Processing',  TIMESTAMPTZ '2025-01-04 13:00:00+00', 'pm-visa-0001',       'address-002', 659.98,  29.98, 689.96,  0.00),
      ('order-0005', 'user-0001', TIMESTAMPTZ '2025-01-05 14:00:00+00', 'Cancelled',   TIMESTAMPTZ '2025-01-05 15:00:00+00', 'pm-mastercard-0002', 'address-003',  59.98,   9.98,   0.00, 69.96),
      ('order-0006', 'user-0001', TIMESTAMPTZ '2025-01-06 10:00:00+00', 'Delivered',   TIMESTAMPTZ '2025-01-09 10:00:00+00', 'pm-amex-0003',       'address-001', 119.99,   9.99, 129.98,  0.00),
      ('order-0007', 'user-0001', TIMESTAMPTZ '2025-01-07 12:00:00+00', 'Processing',  TIMESTAMPTZ '2025-01-07 12:00:00+00', 'pm-visa-0001',       'address-003',  74.98,  11.98,  86.96,  0.00),
      ('order-0008', 'user-0001', TIMESTAMPTZ '2025-01-08 13:00:00+00', 'Sent',        TIMESTAMPTZ '2025-01-09 13:00:00+00', 'pm-mastercard-0002', 'address-001', 189.98,  17.98, 207.96,  0.00),
      ('order-0009', 'user-0001', TIMESTAMPTZ '2025-01-09 14:00:00+00', 'Delivered',   TIMESTAMPTZ '2025-01-12 14:00:00+00', 'pm-visa-0001',       'address-002',  49.98,   7.98,  57.96,  5.00),
      ('order-0010', 'user-0001', TIMESTAMPTZ '2025-01-10 15:00:00+00', 'Cancelled',   TIMESTAMPTZ '2025-01-15 15:00:00+00', 'pm-amex-0003',       'address-003',  69.99,   7.99,   0.00, 77.98),
      ('order-0011', 'user-0001', TIMESTAMPTZ '2025-01-11 16:00:00+00', 'Processing',  TIMESTAMPTZ '2025-01-11 16:00:00+00', 'pm-visa-0001',       'address-001', 634.97,  36.97, 671.94,  0.00),
      ('order-0012', 'user-0001', TIMESTAMPTZ '2025-01-12 17:00:00+00', 'Processing',  TIMESTAMPTZ '2025-01-12 17:00:00+00', 'pm-mastercard-0002', 'address-002', 149.98,  11.98, 161.96,  0.00),
      ('order-0013', 'user-0001', TIMESTAMPTZ '2025-01-13 18:00:00+00', 'Delivered',   TIMESTAMPTZ '2025-01-16 18:00:00+00', 'pm-visa-0001',       'address-003',  69.98,   9.98,  79.96,  0.00)
  )
INSERT INTO
  orders (
    id,
    user_id,
    created_at,
    status,
    status_date,
    payment_method_id,
    address_id,
    product_cost,
    shipping_cost,
    total_cost,
    discounts
  )
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
