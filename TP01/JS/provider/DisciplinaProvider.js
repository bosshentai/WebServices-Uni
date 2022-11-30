const Disciplina = require('../models/Disciplina')

const getAllDisc = async () => {
  const list = await Disciplina.findAll()

  return list
}

const getOneDisc = async (id) => {
  const selected = await Disciplina.findByPk(id)

  return selected
}

const createDisc = async (codigo, nome, sinopse) => {
  const newDisc = await Disciplina.create({
    codigo,
    nome,
    sinopse,
  })

  return newDisc
}

const updateDisc = async (id, codigo, nome, sinopse) => {
  const updateDisciplina = await Disciplina.update(
    {
      codigo,
      nome,
      sinopse,
    },
    {
      where: { id },
    },
  )

  return updateDisciplina
}


const discExist = async (id) =>{
  const disciplina = await Disciplina.findByPk(id)
  if(disciplina !== null){
    return true
  }
  return false
}


const deleteDisc = async (id) =>{
  const deleteD = await Disciplina.destroy(id)

  return deleteD
}

module.exports = {
  getAllDisc,
  getOneDisc,
  createDisc,
  updateDisc,
  discExist,
  deleteDisc
}
