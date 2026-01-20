-- ==========================
-- WISHLISTS
-- ==========================
CREATE TABLE
  IF NOT EXISTS wishlists (
    product_id VARCHAR(100) NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    user_id VARCHAR(100) NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (product_id, user_id)
  );

WITH
  new_values (product_id, user_id) AS (
    VALUES
      (
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee'
      ),
      (
        'atlas274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee'
      )
  )
INSERT INTO
  wishlists (product_id, user_id)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      wishlists w
        WHERE
      w.product_id = new_values.product_id
      AND w.user_id = new_values.user_id
  );