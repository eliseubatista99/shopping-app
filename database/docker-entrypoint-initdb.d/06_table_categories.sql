-- ==========================
-- CATEGORIES
-- ==========================
CREATE TABLE
  IF NOT EXISTS categories (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
  );

WITH
  new_values (id, name) AS (
    VALUES
      (
        'category54274a-6083-47de-a8eb-133d248ee0f8',
        'Office'
      )
  )
INSERT INTO
  categories (id, name)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      categories c
    WHERE
      c.id = new_values.id
      AND c.name = new_values.name
  );