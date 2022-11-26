const express = require('express')
const {
  lerTodosDocentes,
  criarDocente,
  lerUmDocente,
} = require('../controllers/DocenteControllers')
// import { Router } from "express"

const router = express.Router()
router.use(express.json())

const lerTodosDocentesController = lerTodosDocentes
const lerUmDocenteController = lerUmDocente
const criarCursoController = criarDocente

router.get('/', lerTodosDocentesController)
router.get('/:id', lerUmDocenteController)

router.post('/newDocente', criarCursoController)

module.exports = router

// cons
