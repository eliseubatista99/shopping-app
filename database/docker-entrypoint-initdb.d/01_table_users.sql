-- Creates table if not exists
CREATE TABLE
  IF NOT EXISTS users (
    id VARCHAR(100) PRIMARY KEY,
    passwordHash TEXT NOT NULL,
    name VARCHAR(100),
    surname VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phoneNumber VARCHAR(20) UNIQUE,
    phoneNumberPrefix VARCHAR(4),
    image BYTEA NULL
  );

WITH
  new_values (
    id,
    passwordHash,
    name,
    surname,
    email,
    phoneNumber,
    phoneNumberPrefix,
    image
  ) AS (
    VALUES
      (
        '1',
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
    passwordHash,
    name,
    surname,
    email,
    phoneNumber,
    phoneNumberPrefix,
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