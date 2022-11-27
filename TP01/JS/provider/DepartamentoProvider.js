// const { update } = require('../models/Departamento')
const Departamento = require('../models/Departamento')

const getOneD = async (id) => {
  const departamentoExist = await Departamento.findByPk(id)

  return departamentoExist
}

const getAllD = async () => {
  const lista = await Departamento.findAll()

  return lista
}

const createD = async (nome) => {
  const newD = await Departamento.create({
    nome,
  })

  return newD
}

const updateD = async (id, nome) => {
  const updateD = await Departamento.update(
    { nome },
    { where: { id } },
  )

  return updateD
}

const deleteD = async (id) =>{

  const eliminated = await Departamento.destroy({where:{id}})

  return eliminated
}

module.exports = {
  getOneD,
  getAllD,
  createD,
  updateD,
  deleteD
}
