#!/bin/bash
set -e

echo "=========================="
echo "Running init-db.sh script"
echo "=========================="

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  \i /docker-entrypoint-initdb.d/seed_master.sql
EOSQL

echo "Database seeded with test data (idempotent)"