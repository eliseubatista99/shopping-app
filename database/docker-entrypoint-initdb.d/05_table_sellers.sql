-- ==========================
-- SELLERS
-- ==========================
CREATE TABLE
  IF NOT EXISTS sellers (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image BYTEA,
    is_db_active BOOLEAN NOT NULL DEFAULT TRUE
  );

WITH
  new_values (id, name, image) AS (
    VALUES
      (
        'seller-0001',
        'TechZone',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/seller-0001.jpg')
      ),
      (
        'seller-0002',
        'Home & Confort',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/seller-0002.jpg')
      ),
      (
        'seller-0003',
        'Urban Fashion',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/seller-0003.jpg')
      ),
      (
        'seller-0004',
        'Green Market',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/seller-0004.jpg')
      ),
      (
        'seller-0005',
        'Pet Lovers',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/seller-0005.jpg')
      ),
      (
        'seller-0006',
        'Sports Hub',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/seller-0006.jpg')
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
      sellers s
    WHERE
      s.id = new_values.id
  );
