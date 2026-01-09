-- ==========================
-- USERS
-- ==========================
CREATE TABLE
  IF NOT EXISTS users (
    id VARCHAR(100) PRIMARY KEY,
    password_hash TEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    phone_number_prefix VARCHAR(4),
    image BYTEA
  );

WITH
  new_values (
    id,
    password_hash,
    name,
    surname,
    email,
    phone_number,
    phone_number_prefix,
    image
  ) AS (
    VALUES
      (
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Eliseu',
        'Batista',
        'eliseu@mail.com',
        '911111111',
        '+351',
        pg_read_binary_file ('/docker-entrypoint-initdb.d/pepe.jpg')
      )
  )
INSERT INTO
  users (
    id,
    password_hash,
    name,
    surname,
    email,
    phone_number,
    phone_number_prefix,
    image
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
      users u
    WHERE
      u.id = new_values.id
  );