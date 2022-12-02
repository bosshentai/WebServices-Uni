const express = require('express')

const {
  getAllPlanoCurso,
  getOnePLanoCurso,
  createPlanoCurso,
  updatePlanoCurso,
  deletePlanoCurso,
} = require('../controllers/PlanoCurso')

const router = express.Router()
router.use(express.json())

const getAllPlanoCursoController = getAllPlanoCurso
const getOnePlanoCursoController = getOnePLanoCurso
const createPlanoCursoController = createPlanoCurso
const updatePlanoCursoController = updatePlanoCurso
const deletePlanoCursoController = deletePlanoCurso

router.get('/', getAllPlanoCursoController)
router.get('/:id', getOnePlanoCursoController)
router.post('/', createPlanoCursoController)
router.put('/:id', updatePlanoCursoController)
router.delete('/:id', deletePlanoCursoController)

module.exports = router