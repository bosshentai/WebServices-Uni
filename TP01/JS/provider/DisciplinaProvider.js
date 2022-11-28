
const Disciplina = require("../models/Disciplina")


const getAllDisc = async() =>{
  const list = await Disciplina.findAll()

  return list
}

const getOneDisc = async(id) =>{
  const selected = await Disciplina.findBy(id)

  return selected
}


module.exports = {
  getAllDisc,
  getOneDisc
}