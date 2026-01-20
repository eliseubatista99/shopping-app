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
      ('prod-002', 'user-0001'),
      ('prod-004', 'user-0001'),
      ('prod-006', 'user-0001'),
      ('prod-008', 'user-0001'),
      ('prod-014', 'user-0001'),
      ('prod-019', 'user-0001'),
      ('prod-023', 'user-0001')
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
