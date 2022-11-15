// import express from 'express'
// import docenteRoutes from "./routes/docenteRoutes"
const express = require('express')
const dotenv = require("dotenv")
const docenteRoutes = require('./routes/docenteRoutes')
dotenv.config()
require('./db')

const app = express()

const port = process.env.PORT || 3000

app.use('/docente', docenteRoutes);

app.disable('x-powered-by')
app.use(express.urlencoded({extended:true}))

app.listen(port, () =>
  console.log(
    `Server is running on http://localhost:${port}`,
  ),
)
