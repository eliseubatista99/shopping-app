-- ==========================
-- ORDER STATUS
-- ==========================
CREATE TABLE
  IF NOT EXISTS orders_status (
    id VARCHAR(100) PRIMARY KEY,
    order_id VARCHAR(100) NOT NULL REFERENCES orders(id),
    status VARCHAR(50) NOT NULL,
    status_date TIMESTAMPTZ NOT NULL
  );
WITH
  new_values (id, order_id,  status, status_date) AS (
    VALUES
      (
        'status154274a-6083-47de-a8eb-133d248ee0f8',
        'order54274a-6083-47de-a8eb-133d248ee0f8',
        'Processing',
        TIMESTAMPTZ '2025-01-10 14:30:00+00'
      ),
      (
        'status254274a-6083-47de-a8eb-133d248ee0f8',
        'order54274a-6083-47de-a8eb-133d248ee0f8',
        'Sent',
        TIMESTAMPTZ'2025-01-11 15:30:00+00'
      )
  )
INSERT INTO
  orders_status (id, order_id,  status, status_date)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      orders_status a
    WHERE
      a.id = new_values.id
  );