-- Creates table if not exists
CREATE TABLE IF NOT EXISTS tokens (
    id SERIAL PRIMARY KEY,
    userId VARCHAR(20) NOT NULL REFERENCES "users"(id),
    token TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    revoked_at TIMESTAMP
);

WITH new_tokens (userId, token, expires_at) AS (
    VALUES
      ('1', 'refresh_token_joao', CURRENT_TIMESTAMP + INTERVAL '7 days')
)
INSERT INTO tokens (userId, token, expires_at)
SELECT *
FROM new_tokens
WHERE NOT EXISTS (
    SELECT 1 FROM tokens r
    WHERE r.userId = new_tokens.userId
      AND r.token = new_tokens.token
);