-- ==========================
-- PRODUCTS (SCORE CORRECT)
-- ==========================
CREATE TABLE
  IF NOT EXISTS products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    image BYTEA,
    price DOUBLE PRECISION NOT NULL,
    score NUMERIC(3, 2) NOT NULL,
    score_count INTEGER NOT NULL,
    shipping_cost DOUBLE PRECISION NOT NULL,
    best_seller BOOLEAN NOT NULL,
    seller_id VARCHAR(100) NOT NULL REFERENCES sellers (id),
    group_id VARCHAR(100) NOT NULL REFERENCES product_variant_groups (id),
    original_price DOUBLE PRECISION,
    is_wishlisted BOOLEAN,
    brand VARCHAR(100),
    model VARCHAR(100),
    origin VARCHAR(100),
    manufacturer VARCHAR(100),
    height NUMERIC(10, 2),
    width NUMERIC(10, 2),
    depth NUMERIC(10, 2),
    warranty INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_db_active BOOLEAN NOT NULL DEFAULT TRUE
  );

CREATE INDEX IF NOT EXISTS idx_groups ON products (group_id);

WITH
  new_values (
    id,
    name,
    image,
    price,
    score,
    score_count,
    shipping_cost,
    best_seller,
    seller_id,
    group_id,
    original_price,
    is_wishlisted,
    brand,
    model,
    origin,
    manufacturer,
    height,
    width,
    depth,
    warranty
  ) AS (
    VALUES
      ('prod-001', 'Office Desk - Walnut', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-001/prod-001-001.jpg'), 249.99, 4.5, 3, 14.99, TRUE, 'seller-0002', 'pvg-001', 299.99, FALSE, 'WoodLine', 'WL-120', 'Portugal', 'WoodLine Factory', 75.00, 120.00, 60.00, 24),
      ('prod-002', 'Office Desk - White', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-001/prod-002-001.jpg'), 229.99, 4.5, 3, 14.99, FALSE, 'seller-0002', 'pvg-001', 279.99, TRUE, 'WoodLine', 'WL-121', 'Spain', 'WoodLine Factory', 75.00, 120.00, 60.00, 24),
      ('prod-003', 'Standing Desk - Electric', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-002/prod-003-001.jpg'), 499.99, 4.5, 3, 19.99, TRUE, 'seller-0001', 'pvg-002', 549.99, FALSE, 'ErgoRise', 'ER-450', 'Germany', 'ErgoRise GmbH', 120.00, 140.00, 70.00, 36),
      ('prod-004', 'Standing Desk - Manual', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-002/prod-004-001.jpg'), 329.99, 3.5, 3, 19.99, FALSE, 'seller-0001', 'pvg-002', 379.99, FALSE, 'ErgoRise', 'ER-220', 'Portugal', 'ErgoRise Factory', 110.00, 130.00, 65.00, 24),
      ('prod-005', 'Gaming Chair - Black/Red', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-003/prod-005-001.jpg'), 199.99, 4.5, 3, 9.99, TRUE, 'seller-0003', 'pvg-003', 249.99, FALSE, 'ProSeat', 'X200', 'Portugal', 'ProSeat Manufacturing', 120.00, 60.00, 65.00, 24),
      ('prod-006', 'Gaming Chair - Blue/Black', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-003/prod-006-001.jpg'), 189.99, 4.5, 3, 9.99, FALSE, 'seller-0003', 'pvg-003', 229.99, TRUE, 'ProSeat', 'X201', 'Portugal', 'ProSeat Manufacturing', 120.00, 60.00, 65.00, 24),
      ('prod-007', 'Ergonomic Chair - Mesh', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-004/prod-007-001.jpg'), 159.99, 3.5, 3, 9.99, FALSE, 'seller-0004', 'pvg-004', 199.99, FALSE, 'ComfortSit', 'CS-300', 'Italy', 'ComfortSit S.r.l.', 115.00, 58.00, 62.00, 24),
      ('prod-008', 'Ergonomic Chair - Leather', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-004/prod-008-001.jpg'), 219.99, 4.5, 3, 9.99, TRUE, 'seller-0004', 'pvg-004', 269.99, TRUE, 'ComfortSit', 'CS-320', 'Italy', 'ComfortSit S.r.l.', 118.00, 60.00, 64.00, 24),
      ('prod-009', 'LED Desk Lamp - Dimmable', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-005/prod-009-001.jpg'), 49.99, 3.5, 3, 5.99, FALSE, 'seller-0002', 'pvg-005', 59.99, FALSE, 'BrightLite', 'BL-100', 'China', 'BrightLite Tech', 45.00, 15.00, 15.00, 12),
      ('prod-010', 'LED Desk Lamp - USB', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-005/prod-010-001.jpg'), 39.99, 3.5, 3, 5.99, FALSE, 'seller-0002', 'pvg-005', 49.99, TRUE, 'BrightLite', 'BL-110', 'China', 'BrightLite Tech', 40.00, 14.00, 14.00, 12),
      ('prod-011', 'Wireless Mouse - Ergonomic', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-006/prod-011-001.jpg'), 29.99, 4.5, 3, 4.99, FALSE, 'seller-0001', 'pvg-006', 39.99, FALSE, 'ClickPro', 'CP-200', 'Japan', 'ClickPro Inc.', 11.00, 6.00, 3.50, 12),
      ('prod-012', 'Wireless Mouse - RGB', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-006/prod-012-001.jpg'), 34.99, 4.5, 3, 4.99, TRUE, 'seller-0001', 'pvg-006', 44.99, FALSE, 'ClickPro', 'CP-210', 'Japan', 'ClickPro Inc.', 11.00, 6.00, 3.50, 12),
      ('prod-013', 'Mechanical Keyboard - Blue Switch', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-007/prod-013-001.jpg'), 79.99, 4.5, 3, 6.99, TRUE, 'seller-0001', 'pvg-007', 99.99, FALSE, 'KeyMaster', 'KM-88', 'USA', 'KeyMaster Labs', 4.00, 43.00, 13.00, 24),
      ('prod-014', 'Mechanical Keyboard - Red Switch', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-007/prod-014-001.jpg'), 84.99, 4.5, 3, 6.99, FALSE, 'seller-0001', 'pvg-007', 104.99, TRUE, 'KeyMaster', 'KM-89', 'USA', 'KeyMaster Labs', 4.00, 43.00, 13.00, 24),
      ('prod-015', 'Noise Cancelling Headphones', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-008/prod-015-001.jpg'), 129.99, 4.5, 3, 9.99, TRUE, 'seller-0001', 'pvg-008', 159.99, FALSE, 'SoundWave', 'SW-500', 'Germany', 'SoundWave Audio', 20.00, 18.00, 8.00, 24),
      ('prod-016', 'Smartphone Case - Silicone', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-009/prod-016-001.jpg'), 19.99, 3.5, 3, 3.99, FALSE, 'seller-0003', 'pvg-009', 24.99, FALSE, 'SafeCase', 'SC-01', 'China', 'SafeCase Co.', 15.00, 8.00, 1.00, 12),
      ('prod-017', 'Smartphone Case - Leather', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-009/prod-017-001.jpg'), 29.99, 4.5, 3, 3.99, FALSE, 'seller-0003', 'pvg-009', 39.99, TRUE, 'SafeCase', 'SC-02', 'Italy', 'SafeCase Leather', 15.00, 8.00, 1.00, 12),
      ('prod-018', 'Laptop Sleeve - 13 inch', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-001.jpg'), 24.99, 4.5, 3, 4.99, FALSE, 'seller-0005', 'pvg-010', 29.99, FALSE, 'CarryAll', 'CA-13', 'Portugal', 'CarryAll Factory', 2.00, 34.00, 24.00, 12),
      ('prod-019', 'Laptop Sleeve - 15 inch', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-010/pvg-010-001.jpg'), 29.99, 4.5, 3, 4.99, TRUE, 'seller-0005', 'pvg-010', 34.99, FALSE, 'CarryAll', 'CA-15', 'Portugal', 'CarryAll Factory', 2.50, 38.00, 26.00, 12),
      ('prod-020', 'Bluetooth Speaker - Portable', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-011/prod-020-001.jpg'), 59.99, 4.5, 3, 7.99, TRUE, 'seller-0006', 'pvg-011', 79.99, FALSE, 'BeatBox', 'BB-300', 'USA', 'BeatBox Audio', 10.00, 20.00, 10.00, 18),
      ('prod-021', 'Bluetooth Speaker - Waterproof', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-011/prod-021-001.jpg'), 69.99, 4.5, 3, 7.99, FALSE, 'seller-0006', 'pvg-011', 89.99, TRUE, 'BeatBox', 'BB-320', 'USA', 'BeatBox Audio', 12.00, 22.00, 11.00, 18),
      ('prod-022', 'Coffee Maker - Drip', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-012/prod-022-001.jpg'), 89.99, 4.5, 3, 9.99, FALSE, 'seller-0004', 'pvg-012', 109.99, FALSE, 'BrewMaster', 'BM-100', 'Germany', 'BrewMaster GmbH', 30.00, 25.00, 25.00, 24),
      ('prod-023', 'Air Fryer - 5L', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-013/prod-023-001.jpg'), 119.99, 4.5, 3, 9.99, TRUE, 'seller-0004', 'pvg-013', 139.99, FALSE, 'CrispAir', 'CA-5L', 'China', 'CrispAir Tech', 32.00, 28.00, 30.00, 24),
      ('prod-024', 'Yoga Mat - Non Slip', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-014/prod-024-001.jpg'), 29.99, 4.5, 3, 4.99, FALSE, 'seller-0005', 'pvg-014', 39.99, TRUE, 'FlexFit', 'FF-01', 'India', 'FlexFit Goods', 0.50, 183.00, 0.50, 12),
      ('prod-025', 'Running Shoes - Men', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-015/prod-025-001.jpg'), 79.99, 3.5, 3, 6.99, FALSE, 'seller-0006', 'pvg-015', 99.99, FALSE, 'RunPro', 'RP-200', 'Vietnam', 'RunPro Factory', 12.00, 30.00, 20.00, 12),
      ('prod-026', 'Backpack - 20L', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-016/prod-026-001.jpg'), 49.99, 4.5, 3, 6.99, TRUE, 'seller-0005', 'pvg-016', 59.99, FALSE, 'TrailPack', 'TP-20', 'Portugal', 'TrailPack Manufacturing', 45.00, 30.00, 15.00, 12),
      ('prod-027', 'Water Bottle - Insulated', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-017/prod-027-001.jpg'), 24.99, 4.5, 3, 4.99, FALSE, 'seller-0006', 'pvg-017', 29.99, FALSE, 'CoolSip', 'CS-750', 'USA', 'CoolSip Inc.', 25.00, 8.00, 8.00, 12),
      ('prod-028', 'Sunglasses - Polarized', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-018/prod-028-001.jpg'), 39.99, 4.5, 3, 5.99, TRUE, 'seller-0003', 'pvg-018', 49.99, FALSE, 'SunGuard', 'SG-100', 'Italy', 'SunGuard Optics', 5.00, 15.00, 5.00, 12),
      ('prod-029', 'Smart Watch - Fitness', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-019/prod-029-001.jpg'), 129.99, 4.5, 3, 7.99, FALSE, 'seller-0001', 'pvg-019', 159.99, TRUE, 'PulseTech', 'PT-50', 'China', 'PulseTech Electronics', 4.00, 4.00, 1.20, 12),
      ('prod-030', 'Wall Art Poster - Abstract', pg_read_binary_file('/docker-entrypoint-initdb.d/images/pvg-020/prod-030-001.jpg'), 19.99, 3.5, 3, 3.99, FALSE, 'seller-0002', 'pvg-020', 24.99, FALSE, 'ArtHouse', 'AH-01', 'Portugal', 'ArtHouse Studio', 0.50, 60.00, 0.50, 12)
  )
INSERT INTO
  products (
    id,
    name,
    image,
    price,
    score,
    score_count,
    shipping_cost,
    best_seller,
    seller_id,
    group_id,
    original_price,
    is_wishlisted,
    brand,
    model,
    origin,
    manufacturer,
    height,
    width,
    depth,
    warranty
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
      products p
    WHERE
      p.id = new_values.id
  );
