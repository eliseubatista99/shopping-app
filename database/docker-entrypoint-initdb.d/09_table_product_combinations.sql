-- ==========================
-- PRODUCT COMBINATIONS
-- ==========================
CREATE TABLE
  product_combinations (
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    combined_product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, combined_product_id),
    CHECK (product_id <> combined_product_id)
  );

CREATE INDEX idx_product_combinations_product ON product_combinations (product_id);

WITH
  new_values (product_id, combined_product_id) AS (
    VALUES
      (
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        'atlas274a-6083-47de-a8eb-133d248ee0f8'
      )
  )
INSERT INTO
  product_combinations (product_id, combined_product_id)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_combinations p
    WHERE
      p.product_id = new_values.product_id
      AND p.combined_product_id = new_values.combined_product_id
  );