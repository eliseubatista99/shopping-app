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
    is_default BOOLEAN,
    is_db_active BOOLEAN NOT NULL DEFAULT TRUE
  );

WITH
  new_values (
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
        'address-001',
        'user-0001',
        'Eliseu Batista',
        '1000-001',
        'Lisboa',
        'Lisboa',
        'Av. da Liberdade 245, 3º Esq',
        'Portugal',
        '911111111',
        'PT',
        TRUE
      ),
      (
        'address-002',
        'user-0001',
        'Eliseu Batista',
        '08007',
        'Barcelona',
        'Catalunha',
        'Carrer de Provença 312',
        'Espanha',
        '622333444',
        'ES',
        FALSE
      ),
      (
        'address-003',
        'user-0001',
        'Eliseu Batista',
        '75008',
        'Paris',
        'Île-de-France',
        'Rue du Faubourg Saint-Honoré 128',
        'França',
        '612345678',
        'FR',
        FALSE
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
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      addresses a
    WHERE
      a.id = new_values.id
  );
