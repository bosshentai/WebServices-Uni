const Carga = require('../models/Carga')

const createCarga = async (id_viagem, quantidade_carga) => {
  const newCarga = await Carga.create({
    id_viagem,
    quantidade_carga,
  })

  return newCarga
}

const getAllCarga = async () => {
  const getAll = await Carga.findAll()

  // if(getAll === null){
  //   return []
  // }

  return getAll
}

const getOneCarga = async (id) => {


  const getOne = await Carga.findByPk(id)

  // console.log(getOne)

  return getOne
}

module.exports = {
  createCarga,
  getAllCarga,
  getOneCarga
}
