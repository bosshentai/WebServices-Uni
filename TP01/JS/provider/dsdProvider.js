const dsd = require("../models/Dsd")


const getAllD = async () =>{
  const lista = await dsd.findAll()

  return lista
}

const getOneD = async () =>{
  const selected = await dsd.findByPk(id)

  return selected
}

const createD = async(id_docente,id_disciplina,funcao)=>{
  const newD = await dsd.create({
    id_docente,
    id_disciplina,
    funcao
  })

  return newD
}

const updateD = async (id,id_docente,id_disciplina, funcao) =>{
  const updateDsd = await dsd.update({
    id_docente,
    id_disciplina,
    funcao
  },{
    where:{id}
  })

  return updateDsd
}


const existD = async(id) =>{
  const exist = await dsd.findByPk(id)

  if(exist !== null){
    return true
  }

  return false
}

const deleteD = async(id)=>{
  const eliminated = await dsd.destroy({
    where: {id}
  })

  return eliminated
}

module.exports = {
  getAllD,
  getOneD,
  createD,
  updateD,
  existD,
  deleteD
}