const express = require('express')
const {
  getAllCursos,
  getOneCurso,
  createCurso,
  updateCurso,
} = require('../controllers/CursoController')

const router = express.Router()
router.use(express.json())

const getAllCursosController = getAllCursos
const getOneCursoController = getOneCurso
const createCursoController = createCurso
const updateCursoController = updateCurso

router.get('/', getAllCursosController)
router.get('/:id', getOneCursoController)
router.post('/add', createCursoController)
router.put('/:id', updateCursoController)

module.exports = router
