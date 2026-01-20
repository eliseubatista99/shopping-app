-- ==========================
-- ORDER STATUS
-- ==========================
CREATE TABLE IF NOT EXISTS orders_status (
  id VARCHAR(100) PRIMARY KEY,
  order_id VARCHAR(100) NOT NULL REFERENCES orders(id),
  status VARCHAR(50) NOT NULL,
  status_date TIMESTAMPTZ NOT NULL
);

WITH
  new_values (id, order_id, status, status_date) AS (
    VALUES
      -- order-0001 (Delivered)
      ('os-0001-1', 'order-0001', 'Processing', TIMESTAMPTZ '2025-01-01 10:00:00+00'),
      ('os-0001-2', 'order-0001', 'Sent',       TIMESTAMPTZ '2025-01-02 10:00:00+00'),
      ('os-0001-3', 'order-0001', 'InDelivery', TIMESTAMPTZ '2025-01-03 10:00:00+00'),
      ('os-0001-4', 'order-0001', 'Delivered',  TIMESTAMPTZ '2025-01-04 10:00:00+00'),

      -- order-0002 (Delivered)
      ('os-0002-1', 'order-0002', 'Processing', TIMESTAMPTZ '2025-01-02 11:00:00+00'),
      ('os-0002-2', 'order-0002', 'Sent',       TIMESTAMPTZ '2025-01-03 11:00:00+00'),
      ('os-0002-3', 'order-0002', 'InDelivery', TIMESTAMPTZ '2025-01-04 11:00:00+00'),
      ('os-0002-4', 'order-0002', 'Delivered',  TIMESTAMPTZ '2025-01-05 11:00:00+00'),

      -- order-0003 (Shipped)
      ('os-0003-1', 'order-0003', 'Processing', TIMESTAMPTZ '2025-01-03 12:00:00+00'),
      ('os-0003-2', 'order-0003', 'Sent',       TIMESTAMPTZ '2025-01-04 12:00:00+00'),

      -- order-0004 (Paid)
      ('os-0004-1', 'order-0004', 'Processing', TIMESTAMPTZ '2025-01-04 13:00:00+00'),

      -- order-0005 (Cancelled)
      ('os-0005-1', 'order-0005', 'Processing', TIMESTAMPTZ '2025-01-05 14:00:00+00'),
      ('os-0005-2', 'order-0005', 'Cancelled',  TIMESTAMPTZ '2025-01-05 15:00:00+00'),

      -- order-0006 (Delivered)
      ('os-0006-1', 'order-0006', 'Processing', TIMESTAMPTZ '2025-01-06 10:00:00+00'),
      ('os-0006-2', 'order-0006', 'Sent',       TIMESTAMPTZ '2025-01-07 10:00:00+00'),
      ('os-0006-3', 'order-0006', 'InDelivery', TIMESTAMPTZ '2025-01-08 10:00:00+00'),
      ('os-0006-4', 'order-0006', 'Delivered',  TIMESTAMPTZ '2025-01-09 10:00:00+00'),

      -- order-0007 (Paid)
      ('os-0007-1', 'order-0007', 'Processing', TIMESTAMPTZ '2025-01-07 12:00:00+00'),

      -- order-0008 (Shipped)
      ('os-0008-1', 'order-0008', 'Processing', TIMESTAMPTZ '2025-01-08 13:00:00+00'),
      ('os-0008-2', 'order-0008', 'Sent',       TIMESTAMPTZ '2025-01-09 13:00:00+00'),

      -- order-0009 (Delivered)
      ('os-0009-1', 'order-0009', 'Processing', TIMESTAMPTZ '2025-01-09 14:00:00+00'),
      ('os-0009-2', 'order-0009', 'Sent',       TIMESTAMPTZ '2025-01-10 14:00:00+00'),
      ('os-0009-3', 'order-0009', 'InDelivery', TIMESTAMPTZ '2025-01-11 14:00:00+00'),
      ('os-0009-4', 'order-0009', 'Delivered',  TIMESTAMPTZ '2025-01-12 14:00:00+00'),

      -- order-0010 (Returned)
      ('os-0010-1', 'order-0010', 'Processing', TIMESTAMPTZ '2025-01-10 15:00:00+00'),
      ('os-0010-2', 'order-0010', 'Sent',       TIMESTAMPTZ '2025-01-11 15:00:00+00'),
      ('os-0010-3', 'order-0010', 'InDelivery', TIMESTAMPTZ '2025-01-12 15:00:00+00'),
      ('os-0010-4', 'order-0010', 'Delivered',  TIMESTAMPTZ '2025-01-13 15:00:00+00'),
      ('os-0010-5', 'order-0010', 'Returned',   TIMESTAMPTZ '2025-01-15 15:00:00+00'),

      -- order-0011 (Pending)
      ('os-0011-1', 'order-0011', 'Processing', TIMESTAMPTZ '2025-01-11 16:00:00+00'),

      -- order-0012 (Paid)
      ('os-0012-1', 'order-0012', 'Processing', TIMESTAMPTZ '2025-01-12 17:00:00+00'),

      -- order-0013 (Delivered)
      ('os-0013-1', 'order-0013', 'Processing', TIMESTAMPTZ '2025-01-13 18:00:00+00'),
      ('os-0013-2', 'order-0013', 'Sent',       TIMESTAMPTZ '2025-01-14 18:00:00+00'),
      ('os-0013-3', 'order-0013', 'InDelivery', TIMESTAMPTZ '2025-01-15 18:00:00+00'),
      ('os-0013-4', 'order-0013', 'Delivered',  TIMESTAMPTZ '2025-01-16 18:00:00+00')
  )
INSERT INTO
  orders_status (id, order_id, status, status_date)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      orders_status a
    WHERE
      a.id = new_values.id
  );
