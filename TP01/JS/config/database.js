const Pool = require('pg')
const dotenv = require('dotenv')
dotenv.config()


module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialectOptions:{

  },
  define:{
    timestamps:false,
    underscored:true,
  }
}

// const pool = new Pool({
  
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   database: process.env.DB_PASSWORD,
//   dialect: 'postgres',
//   port: process.env.DB_PORT
// },
// define:{
//   timestamps: false,
//   underscored: true
// },)


// module.exports = pool