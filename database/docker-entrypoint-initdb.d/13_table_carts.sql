-- ==========================
-- DOCUMENTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS carts (
    id VARCHAR(100) PRIMARY KEY,
    product_id VARCHAR(100) REFERENCES products (id),
    user_id VARCHAR(100) REFERENCES users (id),
    quantity INTEGER NOT NULL,
    is_selected BOOLEAN
  );

WITH
  new_values (id, product_id, user_id, quantity, is_selected) AS (
    VALUES
      (
        'cart54274a-6083-47de-a8eb-133d248ee0f8',
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        2,
        TRUE
      )
  )
INSERT INTO
  carts (id, product_id, user_id, quantity, is_selected)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      carts a
    WHERE
      a.id = new_values.id
  );