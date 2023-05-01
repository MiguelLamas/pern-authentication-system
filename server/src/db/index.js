const { Pool } = require('pg');

const pool = new Pool({
    user: 'miguellamas',
    host: 'localhost',
    database: 'pern_auth',
    port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}      