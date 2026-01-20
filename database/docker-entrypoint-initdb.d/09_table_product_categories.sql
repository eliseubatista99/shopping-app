-- ==========================
-- PRODUCT CATEGORIES
-- ==========================
CREATE TABLE
  IF NOT EXISTS product_categories (
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    category_id VARCHAR(100) NOT NULL REFERENCES categories (id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
  );

CREATE INDEX idx_categories ON product_categories (category_id);

WITH
  new_values (product_id, category_id) AS (
    VALUES
      (
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        'category54274a-6083-47de-a8eb-133d248ee0f8'
      )
  )
INSERT INTO
  product_categories (product_id, category_id)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_categories p
    WHERE
      p.product_id = new_values.product_id
      AND p.category_id = new_values.category_id
  );