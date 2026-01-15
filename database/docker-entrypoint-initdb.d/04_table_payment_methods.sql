-- ==========================
-- PAYMENT METHODS
-- ==========================
CREATE TABLE
  IF NOT EXISTS payment_methods (
    id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL REFERENCES users(id),
    type VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    network VARCHAR(100),
    image BYTEA,
    card_number VARCHAR(100),
    is_default BOOLEAN,
    security_code VARCHAR(5),
    expiration_month INTEGER,
    expiration_year INTEGER
  );

WITH
  new_values (id, user_id, type, name,network,image,card_number,is_default,security_code,expiration_month,expiration_year) AS (
    VALUES
      (
        'method54274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        'Card',
        'Eliseu Batista',
        'Visa',
        pg_read_binary_file ('/docker-entrypoint-initdb.d/card.jpeg'),
        '1234567891011121',
        TRUE,
        '123',
        11,
        2027
      )
  )
INSERT INTO
  payment_methods (id,user_id, type, name,network,image,card_number,is_default,security_code,expiration_month,expiration_year)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      payment_methods a
    WHERE
      a.id = new_values.id
  );