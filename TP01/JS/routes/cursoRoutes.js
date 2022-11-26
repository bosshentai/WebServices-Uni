const express = require('express')
const {
  lerTodosCursos,
  criarCurso,
  
} = require('../controllers/CursoController')

const router = express.Router()
router.use(express.json())

// const lerTodosCursosController = lerTodosCursos


// router.get('/', lerTodosCursosController)

module.exports = router
