-- ==========================
-- REVIEWS
-- ==========================
CREATE TABLE
  IF NOT EXISTS reviews (
    id VARCHAR(100) PRIMARY KEY,
    reviewer_id VARCHAR(100) NOT NULL REFERENCES users (id),
    product_id VARCHAR(100) NOT NULL REFERENCES products (id),
    score INTEGER NOT NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    comment TEXT 
  );

WITH
  new_values (id, reviewer_id, product_id, score, title, comment) AS (
    VALUES
      (
        'review54274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        'crazy274a-6083-47de-a8eb-133d248ee0f8',
        4,
        'Very good product',
        'Tried it and exceed my expectations'
      )
  )
INSERT INTO
  reviews (id, reviewer_id, product_id, score, title, comment)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      reviews a
    WHERE
      a.id = new_values.id
  );