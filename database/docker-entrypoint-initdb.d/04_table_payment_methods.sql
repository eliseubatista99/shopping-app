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
  new_values (
    id,
    user_id,
    type,
    name,
    network,
    image,
    card_number,
    is_default,
    security_code,
    expiration_month,
    expiration_year
  ) AS (
    VALUES
      (
        'pm-visa-0001',
        'user-0001',
        'Card',
        'Eliseu Batista',
        'Visa',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/pm-visa-0001.jpg'),
        '4532756279624064',
        TRUE,
        '123',
        11,
        2027
      ),
      (
        'pm-mastercard-0002',
        'user-0001',
        'Card',
        'Eliseu Batista',
        'Mastercard',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/pm-mastercard-0002.jpg'),
        '5555555555554444',
        FALSE,
        '456',
        6,
        2028
      ),
      (
        'pm-amex-0003',
        'user-0001',
        'Card',
        'Eliseu Batista',
        'American Express',
        pg_read_binary_file('/docker-entrypoint-initdb.d/images/pm-amex-0003.jpg'),
        '378282246310005',
        FALSE,
        '7890',
        3,
        2026
      )
  )
INSERT INTO
  payment_methods (
    id,
    user_id,
    type,
    name,
    network,
    image,
    card_number,
    is_default,
    security_code,
    expiration_month,
    expiration_year
  )
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      payment_methods p
    WHERE
      p.id = new_values.id
  );
