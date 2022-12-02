const PlanoCurso = require('../models/PlanoCurso')

const getAllPC = async () => {
  const lista = await PlanoCurso.findAll()

  return lista
}

const getOnePC = async (id) => {
  const selected = await PlanoCurso.findByPk(id)

  // console.log(selected)

  return selected
}

const createPC = async (
  id_curso,
  id_disci,
  ano,
  semestre,
  activo,
) => {
  const newPC = await PlanoCurso.create({
    id_curso,
    id_disci,
    ano,
    semestre,
    activo,
    data_status: new Date(),
  })

  return newPC
}

const updatePC = async (
  id,
  id_curso,
  id_disci,
  ano,
  semestre,
  activo,
) => {
  const updatedPC = await PlanoCurso.update(
    {
      id_curso,
      id_disci,
      ano,
      semestre,
      activo,
      data_status: new Date(),
    },
    {
      where: { id },
    },
  )

  return updatedPC
}

const existPC = async (id) => {
  const exist = await PlanoCurso.findByPk(id)

  if (exist !== null) {
    return true
  }

  return false
}

const deletePC = async (id) => {
  const eliminated = await PlanoCurso.destroy({
    where: { id },
  })

  return eliminated
}

module.exports = {
  getAllPC,
  getOnePC,
  createPC,
  updatePC,
  existPC,
  deletePC,
}
