-- ==========================
-- BANNERS
-- ==========================
CREATE TABLE
  IF NOT EXISTS banners (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    subtitle VARCHAR(150),
    category VARCHAR(100),    
    image BYTEA,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

WITH
  new_values (id, title, subtitle, category, image) AS (
    VALUES
      (
        'banners274a-6083-47de-a8eb-133d248ee0f8',
        'Christmas Gifts',
        'Until 23 December',
        'Christmas',
        pg_read_binary_file ('/docker-entrypoint-initdb.d/product.jpg')
      )
  )
INSERT INTO
  banners (id, title, subtitle, category, image)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      banners b
        WHERE
      b.id = new_values.id
  );