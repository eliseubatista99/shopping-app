-- Creates table if not exists
CREATE TABLE
  IF NOT EXISTS tokens (
    id VARCHAR(100),
    user_id VARCHAR(100) NOT NULL REFERENCES "users" (id),
    token TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMPTZ NOT NULL,
    revoked_at TIMESTAMPTZ
  );

WITH
  new_tokens (id, user_id, token, expires_at) AS (
    VALUES
      (
        '0f44274a-6083-47de-a8eb-133d248ee0f8',
        '29bf7b07-defd-4fca-ba6d-22b248c971ee',
        'FTVIRkwwtJwMHV3YQhWpXso3nvugIqm+rNUtPYoJX8KEXasG3Y02rcd9pc5DMOp3K0IMNJBqMdS7XADutRhP7A==',
        CURRENT_TIMESTAMP + INTERVAL '7 days'
      )
  )
INSERT INTO
  tokens (id, user_id, token, expires_at)
SELECT
  *
FROM
  new_tokens
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      tokens r
    WHERE
      r.user_id = new_tokens.user_id
      AND r.token = new_tokens.token
  );