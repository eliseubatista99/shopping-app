-- ==========================
-- SELLERS
-- ==========================
CREATE TABLE
  IF NOT EXISTS sellers (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image BYTEA
  );

WITH
  new_values (id, name, image) AS (
    VALUES
      (
        'dr54274a-6083-47de-a8eb-133d248ee0f8',
        'La Tienda',
        pg_read_binary_file ('/docker-entrypoint-initdb.d/seller.png')
      )
  )
INSERT INTO
  sellers (id, name, image)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      sellers a
    WHERE
      a.id = new_values.id
  );