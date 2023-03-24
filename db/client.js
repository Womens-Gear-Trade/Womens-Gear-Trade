const { Pool } = require('pg');
require('dotenv').config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const client = new Pool(
  process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

// const connectionString =
//   process.env.DATABASE_URL || 'https://localhost:5432/womenGear';

// const client = new Pool({
//   connectionString,
//   ssl:
//     process.env.NODE_ENV === 'production'
//       ? { rejectUnauthorized: false }
//       : undefined,
// });

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const proConfig = process.env.DATABASE_URL; //heroku addons

// const client = new Pool({
//   connectionString:
//     process.env.NODE_ENV === 'production' ? proConfig : devConfig,
// });

module.exports = client;
