const Barco = require('../models/Barco')

const createBarco = async (nome, id_cliente) => {
  const newBarco = await Barco.create({
    nome,
    id_cliente,
  })

  return newBarco
}

const getAllBarco = async () => {
  const getAll = await Barco.findAll({
    attributes: ['imo', 'name', 'id_cliente'],
  })

  // const getAll = await Barco.findAll({
  //   where:{id_cliente: id},
  //   attributes:['imo','name','id_cliente']
  // })

  // console.log(getAll)
  return getAll
}

const getOne = async (id) => {
  const selected = await Barco.findOne({
    where: { imo: id },
    attributes: ['imo', 'name', 'id_cliente'],
  })

  // const selected = await Barco.findByPk(id)

  return selected
}

const updateBarco = async (id, name) => {
  const update = await Barco.update(
    { name },
    {
      where: { imo: id },
    },
  )

  return update
}

const deleteBarco = async (id) => {
  const eliminated = await Barco.destroy({
    where: { imo: id },
  })

  return eliminated
}

module.exports = {
  createBarco,
  getAllBarco,
  getOne,
  updateBarco,
  deleteBarco
}
