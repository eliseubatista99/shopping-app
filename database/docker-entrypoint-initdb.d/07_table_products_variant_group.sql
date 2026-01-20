-- ==========================
-- PRODUCT VARIANT GROUPS
-- ==========================
CREATE TABLE
  IF NOT EXISTS product_variant_groups (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150) NOT NULL
  );

WITH
  new_values (id, name) AS (
    VALUES
      (
        'zau274a-6083-47de-a8eb-133d248ee0f8',
        'Gamer Chair'
      )
  )
INSERT INTO
  product_variant_groups (id, name)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      product_variant_groups g
    WHERE
      g.id = new_values.id
  );