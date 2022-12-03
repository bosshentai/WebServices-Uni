const Horario = require('../models/Horario')

const getAllH = async () => {
  const lista = await Horario.findAll()

  // console.log(lista)
  return lista
}

const getOneH = async (id) => {
  const selected = await Horario.findByPk(id)

  // console.log(selected)

  return selected
}

const createH = async (
  id_disciplina,
  dia_semana,
  hora,
  local,
  duracao,
) => {
  const newH = await Horario.create({
    id_disciplina,
    dia_semana,
    hora,
    local,
    duracao,
  })

  return newH
}

const updateH = async (
  id,
  id_disciplina,
  dia_semana,
  hora,
  local,
  duracao,
) => {
  const updateHorario = await Horario.update(
    {
      id_disciplina,
      dia_semana,
      hora,
      local,
      duracao,
    },
    {
      where: { id },
    },
  )

  // console.log(updateHorario)

  return updateHorario
}

const existH = async (id) => {
  const exist = await Horario.findByPk(id)

  if (exist !== null) {
    return true
  }

  return false
}

const deleteH = async (id) => {
  const eliminated = await Horario.destroy({
    where: { id },
  })

  return eliminated
}

module.exports = {
  getAllH,
  getOneH,
  createH,
  existH,
  updateH,
  deleteH,
}
