const { Pool } = require('pg')

if (process.env.NODE_ENV != 'DEVELOPMENT') {
  require('dotenv').config();
}
  const pool = new Pool();

pool.query('SELECT * FROM "WEAPONS"', [], (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result.rows);
  }
});

module.exports = pool;