// import express from 'express'
// import docenteRoutes from "./routes/docenteRoutes"
const express = require('express')
const dotenv = require('dotenv')
const docenteRoutes = require('./routes/docenteRoutes')
const cursosRouters = require('./routes/cursoRoutes')
const departamentoRouters = require('./routes/DepartamenotRoutes')
const disciplinaRouters = require('./routes/DisciplinaRoutes')
dotenv.config()
require('./db')

const app = express()

const port = process.env.PORT || 3000

app.use('/docente', docenteRoutes)
app.use('/departamento', departamentoRouters)
app.use('/curso', cursosRouters)
app.use('/disciplina',disciplinaRouters)

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))

app.listen(port, () =>
  console.log(
    `Server is running on http://localhost:${port}`,
  ),
)

module.exports = app
