// const Disciplina = require('../models/Disciplina')
const {
  getAllDisc,
  getOneDisc,
  createDisc,
  discExist,
  updateDisc,
  deleteDisc,
} = require('../provider/DisciplinaProvider')
const getAllDisciplina = async (req, res) => {
  try {
    const listDisciplina = await getAllDisc()

    return res.status(201).json(listDisciplina)
  } catch (error) {
    return res.status(500).json({ Error: 'Empty list' })
  }
}
const getOneDisciplina = async (req, res) => {
  const { id } = req.params

  try {
    const disciplina = await getOneDisc(id)

    if (!disciplina) {
      return res
        .status(400)
        .json({ Error: 'Disciplina nao encontrado' })
    }

    return res.status(200).json(disciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema na conecao' })
  }
}

const createDisciplina = async (req, res) => {
  const { codigo, nome, sinopse } = req.body
  try {
    const newDisciplina = await createDisc(
      codigo,
      nome,
      sinopse,
    )

    return res.status(201).json(newDisciplina)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const updateDisciplina = async (req, res) => {
  const { codigo, nome, sinopse } = req.body
  const { id } = req.params

  // console.log(codigo);
  // console.log(nome);
  // console.log(sinopse);

  try {
    const disciplinaExist = await discExist(id)

    // console.log(disciplinaExist)
    if (disciplinaExist === false) {
      return res
        .status(404)
        .json({ Error: 'Disciplina nao encontrado' })
    }

    // console.log(disciplinaExist)
    const updateDisciplina = await updateDisc(
      id,
      codigo,
      nome,
      sinopse,
    )

    if (updateDisciplina === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(204).json(updateDisciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'error de conecao' })
  }
}

const deleteDisciplina = async (req, res) => {
  const { id } = req.params

  try {
    const disciplinaExist = await discExist(id)

    if (disciplinaExist === false) {
      return res
        .status(404)
        .json({ Error: 'Disciplina nao encontrado' })
    }

    const destroyedDisciplina = deleteDisc(id)

    if (!destroyedDisciplina) {
      return res
        .status(404)
        .json({
          Error: 'Nao foi possivel processar pedido',
        })
    }

    return res.status(200).json(destroyedDisciplina)
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  getAllDisciplina,
  getOneDisciplina,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
}
