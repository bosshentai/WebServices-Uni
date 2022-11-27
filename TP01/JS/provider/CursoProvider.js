const Curso = require('../models/Curso')

const getAllC = async() =>{
  const lista = await Curso.findAll()

  return lista
}

const getOneC = async(id) =>{
  const curso = await Curso.findByPk(id)

  return curso
}

const createC = async(sigla,nome,conferegrau) =>{

  const newC = await Curso.create({
    sigla,
    nome,
    conferegrau
  })


  return newC
}

module.exports = {
  getAllC,
  getOneC,
  createC
}