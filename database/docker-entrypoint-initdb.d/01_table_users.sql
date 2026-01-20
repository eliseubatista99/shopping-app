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
        'user-0001',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Eliseu',
        'Batista',
        'eliseu@mail.com',
        '911111111',
        '+351',
        pg_read_binary_file ('/docker-entrypoint-initdb.d/images/user-001.jpg')
      ),
      (
        'user-0002',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Marta',
        'Silva',
        'marta.silva@mail.com',
        '922222222',
        '+351',
        NULL
      ),
      (
        'user-0003',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'João',
        'Costa',
        'joao.costa@mail.com',
        '933333333',
        '+351',
        NULL
      ),
      (
        'user-0004',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Ana',
        'Pereira',
        'ana.pereira@mail.com',
        '944444444',
        '+351',
        NULL
      ),
      (
        'user-0005',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Ricardo',
        'Mendes',
        'ricardo.mendes@mail.com',
        '955555555',
        '+351',
        NULL
      ),
      (
        'user-0006',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Sofia',
        'Gomes',
        'sofia.gomes@mail.com',
        '966666666',
        '+351',
        NULL
      ),
      (
        'user-0007',
        'AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==',
        'Pedro',
        'Alves',
        'pedro.alves@mail.com',
        '977777777',
        '+351',
        NULL
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
