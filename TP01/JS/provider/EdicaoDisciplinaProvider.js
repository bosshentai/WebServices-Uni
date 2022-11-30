const EdicaoDisciplina = require('../models/EdicaoDisciplina')
// const Disciplina = require("../models/Disciplina")

const getAllED = async () => {

  const lista = await EdicaoDisciplina.findAll()

  // const lista = await EdicaoDisciplina.findAll({raw:true})
  // const lista = await EdicaoDisciplina.findAll({
  //   include: {
  //     model: EdicaoDisciplina,
  //     as: 'disciplina'
  //   }
  // })
  // EdicaoDisciplina.find

  // console.log(lista)
  return lista
}

const getOneED = async (id) => {
  const selectED = await EdicaoDisciplina.findByPk(id)

  return selectED
}

const createED = async (
  edicao,
  estado,
  ano_lectivo,
  periodo,
  id_disciplina,
) => {
  const newED = await EdicaoDisciplina.create({
    edicao,
    estado,
    ano_lectivo,
    periodo,
    id_disciplina,
  })

  return newED
}

const updateED = async (
  id,
  edicao,
  estado,
  ano_lectivo,
  periodo,
  id_disciplina,
) => {
  const changedED = await EdicaoDisciplina.update(
    {
      edicao,
      estado,
      ano_lectivo,
      periodo,
      id_disciplina,
    },
    {
      where: { id },
    },
  )

  return changedED
}

const existED = async (id) => {
  const ed = await EdicaoDisciplina.findByPk(id)

  if (ed !== null) {
    return true
  }
  return false
}

const deleteED = async (id) => {
  const eliminated = await EdicaoDisciplina.destroy({
    where: { id },
  })

  return eliminated
}

module.exports = {
  getAllED,
  getOneED,
  createED,
  updateED,
  existED,
  deleteED,
}
