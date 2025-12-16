#!/bin/bash
set -e

echo "Initializing database ${POSTGRES_DB} ..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  \i /docker-entrypoint-initdb.d/seed.sql
EOSQL

echo "Database seeded with test data"
