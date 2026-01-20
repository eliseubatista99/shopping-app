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
        'banner-0001',
        'Christmas Gifts',
        'Até 23 de Dezembro',
        'Christmas',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/banner-0001.jpg')
      ),
      (
        'banner-0002',
        'Back to School Deals',
        'Volta às aulas com descontos',
        'Back to School',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/banner-0002.jpg')
      ),
      (
        'banner-0003',
        'Home Office Essentials',
        'Tudo para o teu escritório',
        'Office',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/banner-0003.jpg')
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
