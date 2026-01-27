-- ==========================
-- DOCUMENTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS documents (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) REFERENCES products (id),
    order_id VARCHAR(100) REFERENCES orders (id),
    content TEXT NOT NULL
  );

WITH
  new_values (id, name, product_id, order_id, content) AS (
    VALUES
      -- Documents for products
      ('doc-prod-001', 'User Manual - Office Desk', 'prod-001', NULL, pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-prod-002', 'User Manual - Gaming Chair', 'prod-005', NULL, pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-prod-003', 'Quick Start Guide - Air Fryer', 'prod-023', NULL, pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),

      -- Documents for orders (one per order)
      ('doc-order-0001', 'Invoice - Order 0001', NULL, 'order-0001', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0002', 'Invoice - Order 0002', NULL, 'order-0002', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0003', 'Invoice - Order 0003', NULL, 'order-0003', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0004', 'Invoice - Order 0004', NULL, 'order-0004', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0005', 'Invoice - Order 0005', NULL, 'order-0005', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0006', 'Invoice - Order 0006', NULL, 'order-0006', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0007', 'Invoice - Order 0007', NULL, 'order-0007', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0008', 'Invoice - Order 0008', NULL, 'order-0008', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0009', 'Invoice - Order 0009', NULL, 'order-0009', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0010', 'Invoice - Order 0010', NULL, 'order-0010', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0011', 'Invoice - Order 0011', NULL, 'order-0011', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0012', 'Invoice - Order 0012', NULL, 'order-0012', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt')),
      ('doc-order-0013', 'Invoice - Order 0013', NULL, 'order-0013', pg_read_file('/docker-entrypoint-initdb.d/documents/exampleDocument.txt'))
  )
INSERT INTO
  documents (id, name, product_id, order_id, content)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      documents d
    WHERE
      d.id = new_values.id
  );
