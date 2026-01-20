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
      ('cat-001', 'Office'),
      ('cat-002', 'Garden'),
      ('cat-003', 'Electronics'),
      ('cat-004', 'Home Decor'),
      ('cat-005', 'Kitchen'),
      ('cat-006', 'Sports'),
      ('cat-007', 'Beauty'),
      ('cat-008', 'Toys'),
      ('cat-009', 'Christmas'),
      ('cat-010', 'Back to School'),
      ('cat-011', 'Under €10'),
      ('cat-012', 'Fathers Day'),
      ('cat-013', 'Mothers Day'),
      ('cat-014', 'Eco Friendly'),
      ('cat-015', 'Limited Edition')
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
        OR c.name = new_values.name
  );
