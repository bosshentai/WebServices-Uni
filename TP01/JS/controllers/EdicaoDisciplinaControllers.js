// const EdicaoDisciplina = require('../models/EdicaoDisciplina')
const {
  getAllED,
  getOneED,
  createED,
  updateED,
  existED,
  deleteED,
} = require('../provider/EdicaoDisciplinaProvider')

const getAllEdicaoDisciplina = async (req, res) => {
  // console.log("Here")
  try {
    const listaEdicaoDisciplina = await getAllED()

    // const listaEdicaoDisciplina = await EdicaoDisciplina.findAll()

    console.log(listaEdicaoDisciplina)
    // console.log(JSON.stringify(listaEdicaoDisciplina))

    return res.status(200).json(listaEdicaoDisciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conexão' })
  }
}

const getOneEdicaoDisciplina = async (req, res) => {
  const { id } = req.params

  try {
    const edicaoDisciplina = await getOneED(id)

    if (!edicaoDisciplina) {
      return res
        .status(404)
        .json({ Error: 'EdicaoDisciplina nao encontrado' })
    }

    return res.status(200).json(edicaoDisciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conecao' })
  }
}

const createEdicaoDisciplina = async (req, res) => {
  const {
    edicao,
    estado,
    ano_lectivo,
    periodo,
    id_disciplina,
  } = req.body

  console.log('edicao ' + edicao)
  console.log('estado ' + estado)
  console.log('ano_lectivo' + ano_lectivo)
  console.log('periodo ' + periodo)
  console.log('id_disciplina ' + id_disciplina)
  try {
    const newEdicaoDisciplina = await createED(
      edicao,
      estado,
      ano_lectivo,
      periodo,
      id_disciplina,
    )

    return res.status(201).json(newEdicaoDisciplina)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const updateEdicaoDisciplina = async (req, res) => {
  const { id } = req.params
  const {
    edicao,
    estado,
    ano_lectivo,
    periodo,
    id_disciplina,
  } = req.body

  try {
    const edicaoDisciplinaExsit = await existED(id)

    if (edicaoDisciplinaExsit === false) {
      return res.status(404).json({
        Error: 'Edicao da Disciplina nao encontrado',
      })
    }

    const updatedEdicaoDisciplina = await updateED(
      id,
      edicao,
      estado,
      ano_lectivo,
      periodo,
      id_disciplina,
    )

    if (updatedEdicaoDisciplina === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(204).json(updatedEdicaoDisciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Error de conecao' })
  }
}

const deleteEdicaoDisciplina = async (req, res) => {
  const { id } = req.params

  try {
    const edicaoDisciplinaExist = await existED(id)
    if (edicaoDisciplinaExist === false) {
      return res.status(404).json({
        Error: 'Edicao Disciplina nao encontrado',
      })
    }

    const destroyedEdicaoDisciplina = deleteED(id)

    if (!destroyedEdicaoDisciplina) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(200).json(destroyedEdicaoDisciplina)
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  getAllEdicaoDisciplina,
  getOneEdicaoDisciplina,
  createEdicaoDisciplina,
  updateEdicaoDisciplina,
  deleteEdicaoDisciplina
}
