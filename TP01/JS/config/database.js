const Pool = require('pg')
const dotenv = require('dotenv')
dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  database: process.env.DB_PASSWORD,
  dialect: 'postgres',
  port: process.env.DB_PORT
})


module.exports = pool