const {
  getAllPC,
  getOnePC,
  createPC,
  updatePC,
  existPC,
  deletePC,
} = require('../provider/PlanoCursoProvider')

const getAllPlanoCurso = async (req, res) => {
  try {
    const listaPlanoCurso = await getAllPC()

    return res.status(200).json(listaPlanoCurso)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conexao' })
  }
}

const getOnePLanoCurso = async (req, res) => {
  const { id } = req.params

  // console.log(id)
  try {
    const planoCurso = await getOnePC(id)

    if (!planoCurso) {
      return res
        .status(404)
        .json({ Error: 'Problema de conexao' })
    }

    // console.log(planoCurso)
    return res.status(200).json(planoCurso)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conexao' })
  }
}

const createPlanoCurso = async (req, res) => {
  const {
    id_curso,
    id_disci,
    ano,
    semestre,
    activo,
    // data_status,
  } = req.body

  try {
    const newPlanoCurso = await createPC(
      id_curso,
      id_disci,
      ano,
      semestre,
      activo,
    
    )

    return res.status(201).json(newPlanoCurso)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const updatePlanoCurso = async (req, res) => {
  const { id } = req.params

  const {
    id_curso,
    id_disci,
    ano,
    semestre,
    activo,
    data_status,
  } = req.body

  try {
    const planoCursoExist = await existPC(id)

    if (planoCursoExist === false) {
      return res.status(404).json({
        Error: 'Plano do Curso nao encontrado',
      })
    }

    const updatedPlanoCurso = await updatePC(
      id,
      id_curso,
      id_disci,
      ano,
      semestre,
      activo,
      data_status,
    )

    if (updatedPlanoCurso === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }
    return res.status(204).json(updatedPlanoCurso)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Error de conexao' })
  }
}

const deletePlanoCurso = async (req, res) => {
  const { id } = req.params

  try {
    const planoCursoExist = await existPC(id)

    if (planoCursoExist === false) {
      return res.status(404).json({
        Error: 'Plano do Curso nao encontrado',
      })
    }

    const destroyedPlanoCurso = deletePC(id)

    if (!destroyedPlanoCurso) {
      return res
        .status(404)
        .json({
          Error: 'Nao foi possivel processar pedido',
        })
    }

    return res.status(200).json(destroyedPlanoCurso)
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  getAllPlanoCurso,
  getOnePLanoCurso,
  createPlanoCurso,
  updatePlanoCurso,
  deletePlanoCurso
}