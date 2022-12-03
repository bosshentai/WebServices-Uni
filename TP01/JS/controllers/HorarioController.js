const {
  getAllH,
  getOneH,
  createH,
  updateH,
  existH,
  deleteH,
} = require('../provider/HorarioProvider')

const getAllHorario = async (req, res) => {

  // const listaHorario = await getAllH()

  // console.log(listaHorario)
  try {


    const listaHorario = await getAllH()

    console.log(listaHorario)



    return res.status(200).json(listaHorario)

  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conexão' })
  }
}

const getOneHorario = async (req, res) => {
  const { id } = req.params

  try {
    const horario = await getOneH(id)

    if (!horario) {
      return res
        .status(404)
        .json({ Error: 'Horario nao encontrado' })
    }

    return res.status(200).json(horario)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conexao' })
  }
}

const createHorario = async (req, res) => {
  const {
    id_disciplina,
    dia_semana,
    hora,
    local,
    duracao,
  } = req.body

  try {
    const newHorario = await createH(
      id_disciplina,
      dia_semana,
      hora,
      local,
      duracao,
    )

    return res.status(201).json(newHorario)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const updateHorario = async (req, res) => {
  const { id } = req.params
  const {
    id_disciplina,
    dia_semana,
    hora,
    local,
    duracao,
  } = req.body

  // console.log(id)
  // console.log(id_disciplina)
  // console.log(hora)
  // console.log(duracao)
  // console.log(duracao)


  try {
    const updatedHorario = await updateH(
      id,
      id_disciplina,
      dia_semana,
      hora,
      local,
      duracao,
    )
      // console.log(updatedHorario)
    if (updatedHorario === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(202).json(updatedHorario)
  } catch (error) {
    return res
      .status(500)
      .json({ Error: 'Error de conexao' })
  }
}

const deleteHorario = async (req, res) => {
  const { id } = req.params
  try {
    const horarioExist = await existH(id)

    if (horarioExist === false) {
      return res.status(404).json({
        Error: 'Horario nao encontrado',
      })
    }

    const destroyedHorario = deleteH(id)

    if (!destroyedHorario) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(200).json(destroyedHorario)
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  getAllHorario,
  getOneHorario,
  createHorario,
  updateHorario,
  deleteHorario,
}
