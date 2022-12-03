const Aula = require('../models/Aula')

const getAllA = async () => {
  const lista = await Aula.findAll()
  // console.log(lista)
  return lista
}

const getOneA = async (id) => {
  const selected = await Aula.findByPk(id)

  return selected
}

const createA = async (numero, data, id_horario, tipo) => {
  const newA = await Aula.create({
    numero,
    data,
    id_horario,
    tipo,
  })

  return newA
}

const updateA = async (
  id,
  numero,
  data,
  id_horario,
  tipo,
) => {
  const updateAula = await Aula.update(
    { numero, data, id_horario, tipo },
    {
      where: { id },
    },
  )

  return updateAula
}

const existA = async (id) => {
  const exist = await Aula.findByPk(id)

  if (exist !== null) {
    return true
  }

  return false
}

const deleteA = async(id) =>{
  const eliminated = await Aula.destroy({
    where:{id}
  })

  return eliminated
}


module.exports = {
  getAllA,
  getOneA,
  createA,
  updateA,
  existA,
  deleteA
}
