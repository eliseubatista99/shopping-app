-- ==========================
-- ADDRESSES
-- ==========================
CREATE TABLE
  IF NOT EXISTS addresses (
    id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL REFERENCES users (id),
    name VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    city VARCHAR(30) NOT NULL,
    location VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    country VARCHAR(40) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    country_code VARCHAR(5),
    is_default BOOLEAN
  );

WITH
  new_addresses (
    id,
    user_id,
    name,
    postal_code,
    city,
    location,
    street,
    country,
    phone,
    country_code,
    is_default
  ) AS (
    VALUES
      (
        '5t44274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        'Eliseu Batista',
        '6100-123',
        'Xangai',
        'Xangai',
        'Ruazinha 25, Porta X',
        'Portugal',
        '911111111',
        'PT',
        TRUE
      )
  )
INSERT INTO
  addresses (
    id,
    user_id,
    name,
    postal_code,
    city,
    location,
    street,
    country,
    phone,
    country_code,
    is_default
  )
SELECT
  *
FROM
  new_addresses
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      addresses a
    WHERE
      a.id = new_addresses.id
  );