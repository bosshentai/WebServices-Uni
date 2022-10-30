import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

// console.log(process.env.DB_HOST)

export const pool = new Pool({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  port: process.env.DB_PORT,
})

// module.exports = pool
