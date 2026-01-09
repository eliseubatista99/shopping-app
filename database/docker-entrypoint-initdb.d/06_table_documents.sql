-- ==========================
-- DOCUMENTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS documents (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) REFERENCES products (id),
    -- order_id VARCHAR(100) REFERENCES products (id),
    content TEXT NOT NULL
  );

WITH
  new_values (id, name, product_id, content) AS (
    VALUES
      (
        'dr54274a-6083-47de-a8eb-133d248ee0f8',
        'La Tienda',
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        pg_read_file ('/docker-entrypoint-initdb.d/exampleDocument.txt')
      )
  )
INSERT INTO
  documents (id, name, product_id, content)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      documents a
    WHERE
      a.id = new_values.id
  );