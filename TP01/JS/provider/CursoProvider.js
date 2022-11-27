const Curso = require('../models/Curso')

const getAllC = async() =>{
  const lista = await Curso.findAll()

  return lista
}

const getOneC = async(id) =>{
  const curso = await Curso.findByPk(id)

  return curso
}



module.exports = {
  getAllC,
  getOneC
}