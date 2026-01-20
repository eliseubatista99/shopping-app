-- ==========================
-- PRODUCT IMAGES
-- ==========================
CREATE TABLE
  IF NOT EXISTS product_images (
    id VARCHAR(100) PRIMARY KEY,
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    image BYTEA,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

-- Corrige o index para permitir várias imagens por produto
CREATE UNIQUE INDEX IF NOT EXISTS ux_product_images_order
ON product_images (product_id, sort_order);

WITH
  new_values (id, product_id, image, sort_order) AS (
    VALUES
      ('img-prod-001-0', 'prod-001', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-001/prod-001-001.jpg'), 0),
      ('img-prod-001-1', 'prod-001', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-001/pvg-001-001.jpg'), 1),

      ('img-prod-002-0', 'prod-002', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-001/prod-002-001.jpg'), 0),
      ('img-prod-002-1', 'prod-002', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-001/pvg-001-001.jpg'), 1),

      ('img-prod-003-0', 'prod-003', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-002/prod-003-001.jpg'), 0),
      ('img-prod-003-1', 'prod-003', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-002/pvg-002-001.jpg'), 1),

      ('img-prod-004-0', 'prod-004', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-002/prod-004-001.jpg'), 0),
      ('img-prod-004-1', 'prod-004', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-002/pvg-002-001.jpg'), 1),

      ('img-prod-005-0', 'prod-005', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-003/prod-005-001.jpg'), 0),
      ('img-prod-005-1', 'prod-005', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-003/pvg-003-001.jpg'), 1),

      ('img-prod-006-0', 'prod-006', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-003/prod-006-001.jpg'), 0),
      ('img-prod-006-1', 'prod-006', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-003/pvg-003-001.jpg'), 1),

      ('img-prod-007-0', 'prod-007', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-004/prod-007-001.jpg'), 0),
      ('img-prod-007-1', 'prod-007', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-004/pvg-004-001.jpg'), 1),

      ('img-prod-008-0', 'prod-008', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-004/prod-008-001.jpg'), 0),
      ('img-prod-008-1', 'prod-008', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-004/pvg-004-001.jpg'), 1),

      ('img-prod-009-0', 'prod-009', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-005/prod-009-001.jpg'), 0),
      ('img-prod-009-1', 'prod-009', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-005/prod-009-002.jpg'), 1),

      ('img-prod-010-0', 'prod-010', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-005/prod-010-001.jpg'), 0),
      ('img-prod-010-1', 'prod-010', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-005/prod-010-002.jpg'), 1),

      ('img-prod-011-0', 'prod-011', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-006/prod-011-001.jpg'), 0),
      ('img-prod-011-1', 'prod-011', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-006/prod-011-002.jpg'), 1),

      ('img-prod-012-0', 'prod-012', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-006/prod-012-001.jpg'), 0),
      ('img-prod-012-1', 'prod-012', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-006/prod-012-002.jpg'), 1),

      ('img-prod-013-0', 'prod-013', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-007/prod-013-001.jpg'), 0),
      ('img-prod-013-1', 'prod-013', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-007/pvg-007-001.jpg'), 1),

      ('img-prod-014-0', 'prod-014', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-007/prod-014-001.jpg'), 0),
      ('img-prod-014-1', 'prod-014', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-007/pvg-007-001.jpg'), 1),

      ('img-prod-015-0', 'prod-015', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-008/prod-015-001.jpg'), 0),
      ('img-prod-015-1', 'prod-015', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-008/prod-015-002.jpg'), 1),

      ('img-prod-016-0', 'prod-016', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-009/prod-016-001.jpg'), 0),

      ('img-prod-017-0', 'prod-017', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-009/prod-017-001.jpg'), 0),

      ('img-prod-018-0', 'prod-018', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-001.jpg'), 0),
      ('img-prod-018-1', 'prod-018', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-002.jpg'), 1),
      ('img-prod-018-2', 'prod-018', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-003.jpg'), 2),

      ('img-prod-019-0', 'prod-019', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-001.jpg'), 0),
      ('img-prod-019-1', 'prod-019', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-002.jpg'), 1),
      ('img-prod-019-2', 'prod-019', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-003.jpg'), 2),

      ('img-prod-020-0', 'prod-020', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-011/prod-020-001.jpg'), 0),
      ('img-prod-020-1', 'prod-020', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-011/pvg-011-001.jpg'), 1),

      ('img-prod-021-0', 'prod-021', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-011/prod-021-001.jpg'), 0),
      ('img-prod-021-1', 'prod-021', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-011/pvg-011-001.jpg'), 1),

      ('img-prod-022-0', 'prod-022', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-012/prod-022-001.jpg'), 0),
      ('img-prod-022-1', 'prod-022', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-012/prod-022-002.jpg'), 1),
      ('img-prod-022-2', 'prod-022', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-012/prod-022-003.jpg'), 2),

      ('img-prod-023-0', 'prod-023', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-013/prod-023-001.jpg'), 0),
      ('img-prod-023-1', 'prod-023', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-013/prod-023-002.jpg'), 1),

      ('img-prod-024-0', 'prod-024', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-014/prod-024-001.jpg'), 0),
      ('img-prod-024-1', 'prod-024', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-014/prod-024-002.jpg'), 1),

      ('img-prod-025-0', 'prod-025', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-015/prod-025-001.jpg'), 0),
      ('img-prod-025-1', 'prod-025', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-015/prod-025-002.jpg'), 1),

      ('img-prod-026-0', 'prod-026', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-016/prod-026-001.jpg'), 0),

      ('img-prod-027-0', 'prod-027', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-017/prod-027-001.jpg'), 0),
      ('img-prod-027-1', 'prod-027', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-017/prod-027-002.jpg'), 1),

      ('img-prod-028-0', 'prod-028', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-018/prod-028-001.jpg'), 0),

      ('img-prod-029-0', 'prod-029', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-019/prod-029-001.jpg'), 0),
      ('img-prod-029-1', 'prod-029', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-019/prod-029-002.jpg'), 1),

      ('img-prod-030-0', 'prod-030', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-020/prod-030-001.jpg'), 0),
      ('img-prod-030-1', 'prod-030', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-020/prod-030-002.jpg'), 1)
  )
INSERT INTO
  product_images (id, product_id, image, sort_order)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_images i
    WHERE
      i.id = new_values.id
  );
