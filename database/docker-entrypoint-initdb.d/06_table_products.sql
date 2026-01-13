-- ==========================
-- PRODUCTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(100),
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
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

CREATE INDEX idx_groups ON products (group_id);

WITH
  new_values (
    id,
    name,
    category,
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
      (
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        'Gamer Chair',
        'Office',
        199.99,
        4.75,
        124,
        9.99,
        true,
        'dr54274a-6083-47de-a8eb-133d248ee0f8',
        'zau274a-6083-47de-a8eb-133d248ee0f8',
        249.99,
        false,
        'ProSeat',
        'X200',
        'Portugal',
        'ProSeat Manufacturing',
        120.00,
        60.00,
        65.00,
        24
      ),
      (
        'atlas274a-6083-47de-a8eb-133d248ee0f8',
        'Gamer Chair',
        'Office',
        199.99,
        4.75,
        124,
        9.99,
        true,
        'dr54274a-6083-47de-a8eb-133d248ee0f8',
        'zau274a-6083-47de-a8eb-133d248ee0f8',
        249.99,
        false,
        'ProSeat',
        'X200',
        'Portugal',
        'ProSeat Manufacturing',
        120.00,
        60.00,
        65.00,
        24
      )
  )
INSERT INTO
  products (
    id,
    name,
    category,
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