// const { Sequelize} = require('sequelize');
const Curso = require('../models/Curso')
const {
  getAllC,
  getOneC,
  createC,
  existC,
  updateC,
  deleteC,
} = require('../provider/CursoProvider')

const getAllCursos = async (req, res) => {
  try {
    const listaCursos = await getAllC()
    // const listaCursos = await Curso.findAll()

    return res.status(201).json(listaCursos)
  } catch (e) {
    return res.status(500).json({ error: 'Empty list' })
  }
}

const getOneCurso = async (req, res) => {
  const { id } = req.params

  try {
    const curso = await getOneC(id)
    // const curso = await Curso.findByPk(id)

    if (!curso) {
      return res
        .status(400)
        .json({ Error: 'Curso nao encontrado' })
    }

    return res.status(200).json(curso)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const createCurso = async (req, res) => {
  const { sigla, nome, conferegrau } = req.body

  try {
    const newCurso = await createC(sigla, nome, conferegrau)

    if (!newCurso) {
      return res.status(400).json({
        Error:
          'Nao foi possivel processar pedido. Verifca se os paramentros estao corretos',
      })
    }

    return res.status(201).json(newCurso)
    // return res.status(201).json(req.body)
  } catch (e) {
    return res.status(500).json({ error: 'Error ' })
  }
}

const updateCurso = async (req, res) => {
  const { sigla, nome, conferegrau } = req.body
  const { id } = req.params

  try {
    const cursoExist = await existC(id)

    if (cursoExist === false) {
      return res
        .status(404)
        .json({ Error: 'Curso nao encontrado' })
    }

    const updateCurso = await updateC(
      id,
      sigla,
      nome,
      conferegrau,
    )

    if (updateCurso === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(204).json(updateCurso)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const deleteCurso = async (req, res) => {
  const { id } = req.params

  try {
    const cursoExist = await existC(id)

    if (cursoExist === false) {
      return res
        .status(400)
        .json({ Error: 'Curso nao encontrado' })
    }

    const destroyedCurso = await deleteC(id)

    if (!destroyedCurso) {
      return res
        .status(404)
        .json({
          Error: 'Nao foi possivel processar pedido',
        })
    }

    return res.status(200).json(destroyedCurso)
    // return
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  getAllCursos,
  createCurso,
  getOneCurso,
  updateCurso,
  deleteCurso,
}
