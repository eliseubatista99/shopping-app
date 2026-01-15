-- ==========================
-- RELATED PRODUCTS
-- ==========================
CREATE TABLE
  related_products (
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    related_product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, related_product_id),
    CHECK (product_id <> related_product_id)
  );

CREATE INDEX idx_related_products_product ON related_products (product_id);

WITH
  new_values (product_id, related_product_id) AS (
    VALUES
      (
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        'atlas274a-6083-47de-a8eb-133d248ee0f8'
      )
  )
INSERT INTO
  related_products (product_id, related_product_id)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      related_products p
    WHERE
      p.product_id = new_values.product_id
      AND p.related_product_id = new_values.related_product_id
  );