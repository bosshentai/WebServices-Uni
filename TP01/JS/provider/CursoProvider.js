const Curso = require('../models/Curso')

const getAllC = async () => {
  const lista = await Curso.findAll()

  return lista
}

const getOneC = async (id) => {
  const curso = await Curso.findByPk(id)

  return curso
}

const createC = async (sigla, nome, conferegrau) => {
  const newC = await Curso.create({
    sigla,
    nome,
    conferegrau,
  })

  return newC
}

const updateC = async (id, sigla, nome, conferegrau) => {
  const updatedC = await Curso.update(
    {
      sigla,
      nome,
      conferegrau,
    },
    { where: { id } },
  )
}

const existC = async (id) => {
  const curso = await Curso.findByPk(id)

  if (curso !== null) {
    return true
  }

  return false
}

const deleteC = async (id) => {
  const eliminated = await Curso.destroy({ where: { id } })

  return eliminated
}

module.exports = {
  getAllC,
  getOneC,
  createC,
  updateC,
  existC,
  deleteC,
}
