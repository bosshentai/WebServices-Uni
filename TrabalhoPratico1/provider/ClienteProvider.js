const Cliente = require('../models/Cliente')
const { sign } = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


const createCliente = async (name, tipo) => {
  const newCliente = await Cliente.create({
    name: name,
    tipo: tipo,
    token: sign({}, authConfig.secret),
  })

  // console.log("Provider cliente" + newCliente);

  return newCliente
}

const isAgent = async (token) => {
  const client = await Cliente.findOne({
    where: { token },
    attributes: ['tipo'],
  })

  return client.dataValues.tipo
}

const getClientIDFromToken = async (token) => {
  const clientId = await Cliente.findOne({
    where: { token },
    attributes: ['id'],
  })

  return clientId.dataValues.id
}

module.exports = {
  createCliente,
  isAgent,
  getClientIDFromToken,
}
