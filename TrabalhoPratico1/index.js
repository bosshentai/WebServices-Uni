const express = require('express')
const dotenv = require('dotenv')
const clienteRouters = require('./routes/ClienteRoutes')
const barcoRouters = require('./routes/BarcoRoutes')
const viagemRouters = require('./routes/ViagemRoutes')
const cargaRouters = require('./routes/CargaRoutes')
const passageiroRouters = require('./routes/PassageiroRoutes')
dotenv.config()
require('./db')

const app = express()

const port = process.env.PORT || 3000

app.use('/cliente', clienteRouters)
app.use('/barco', barcoRouters)
app.use('/viagem', viagemRouters)
app.use('/carga', cargaRouters)
app.use('/passageiro', passageiroRouters)

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(
    `Server is running on http:://localhost:${port}`,
  )
})

module.exports = app
