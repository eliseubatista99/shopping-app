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

CREATE UNIQUE INDEX ux_product_images_order ON product_images (product_id);

WITH
  new_values (id, product_id, image, sort_order) AS (
    VALUES
      (
        'imgs74a-6083-47de-a8eb-133d248ee0f8',
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        pg_read_binary_file ('/docker-entrypoint-initdb.d/product.jpg'),
        0
      )
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