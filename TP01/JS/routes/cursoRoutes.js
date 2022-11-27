const express = require('express')
const {
  getAllCursos,
  getOneCurso,
  criarCurso,
} = require('../controllers/CursoController')

const router = express.Router()
router.use(express.json())

const getAllCursosController = getAllCursos
const getOneCursoController = getOneCurso

router.get('/', getAllCursosController)
router.get('/:id', getOneCurso)

module.exports = router
