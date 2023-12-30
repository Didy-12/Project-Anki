const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'anki_node_DB',
  password: 'postgres_esilv',
  port: 5432,
});

module.exports = pool;
