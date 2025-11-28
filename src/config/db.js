const { Pool } = require("pg");

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://user:password@localhost:5432/hmcts_tasks";

const pool = new Pool({
  connectionString,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle Postgres client", err);
  process.exit(1);
});

module.exports = pool;
