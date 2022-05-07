const { Pool } = require('pg')

if (process.env.NODE_ENV != 'DEVELOPMENT') {
  require('dotenv').config();
}

const pool = new Pool();

module.exports = pool;