const { Pool } = require('pg');
// require('dotenv').config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };

// const proConfig = {
//   connectionString: process.env.DATABASE_URL,
// };

// const client = new Pool(
//   process.env.NODE_ENV === 'production' ? proConfig : devConfig
// );

const connectionString =
  process.env.DATABASE_URL || 'https://localhost:5432/womenGear';

const client = new Pool({
  connectionString,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
