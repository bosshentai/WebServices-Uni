const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
require("./db")

const app = express();

const port = process.env.PORT ||3000;


app.listen(port,()=>{
  console.log(`Server is running on http:://localhost:${port}`)

})


module.exports = app
