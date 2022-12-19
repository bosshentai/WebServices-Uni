const Passageiro = require('../models/Passageiro')

const createPassageiro = async (
  id_viagem,
  quantidade_passageiro,
) => {
  const newPassageiro = await Passageiro.create({
    id_viagem,
    quantidade_passageiro,
  })

  return newPassageiro
}

const getAllPassageiro = async () => {
  const getAll = await Passageiro.findAll()

  return getAll
}

const getOnePassageiro = async (id) => {
  const getOne = await Passageiro.findByPk(id)

  return getOne
}


module.exports = {
  createPassageiro,
  getAllPassageiro,
  getOnePassageiro
}