const express = require('express')
const {
  getAllCursos,
  getOneCurso,
  createCurso,
} = require('../controllers/CursoController')

const router = express.Router()
router.use(express.json())

const getAllCursosController = getAllCursos
const getOneCursoController = getOneCurso
const createCursoController = createCurso

router.get('/', getAllCursosController)
router.get('/:id', getOneCursoController)
router.post('/add', createCursoController)

module.exports = router
