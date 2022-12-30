
const {
  getAllA,
  getOneA,
  createA,
  updateA,
  existA,
  deleteA,
} = require('../provider/AulaProvider')

const getAllAula = async (req, res) => {
  try {
    const listAula = await getAllA()

    return res.status(200).json(listAula)
  } catch (e) {
    return res.status(500).json({ Error: 'Empty list' })
  }
}

const getOneAula = async (req, res) => {
  const { id } = req.params

  try {
    const aula = await getOneA(id)

    if (!aula) {
      return res
        .status(400)
        .json({ Error: 'Aula nao encontrado' })
    }

    return res.status(200).json(aula)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const createAula = async (req, res) => {
  const { numero, data, id_horario, tipo } = req.body

  try {
    const newAula = await createA(
      numero,
      data,
      id_horario,
      tipo,
    )

    if (!newAula) {
      return res.status(400).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }
    return res.status(201).json(newAula)
  } catch (e) {
    return res.status(500).json({ Error: 'Error' })
  }
}

const updateAula = async (req, res) => {
  const { id } = req.params

  const { numero, data, id_horario, tipo } = req.body

  try {
    const aulaExist = await existA(id)

    if (aulaExist === false) {
      return res.status(404).json({
        Error: 'Aula nao encontrado',
      })
    }

    const updatedAula = await updateA(
      id,
      numero,
      data,
      id_horario,
      tipo,
    )

    if (updatedAula === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }
    return res.status(204).json(updateAula)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deleteAula = async (req, res) => {
  const { id } = req.params

  try {
    const aulaExist = await existA(id)

    if (aulaExist === false) {
      return res
        .status(400)
        .json({ Error: 'Aula nao encontrado' })
    }

    const destroyedAula = await deleteA(id)

    if (!destroyedAula) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(200).json(destroyedAula)
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  getAllAula,
  getOneAula,
  createAula,
  updateAula,
  deleteAula
}
