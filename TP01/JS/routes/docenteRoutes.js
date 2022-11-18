const express = require('express');
const { lerTodosDocentes, criarDocente } = require('../controllers/DocenteControllers');
// import { Router } from "express"

const router = express.Router()
router.use(express.json())


const lerTodosDocentesController = lerTodosDocentes
const criarDocenteController = criarDocente

router.get('/',lerTodosDocentesController);
router.post("/add",criarDocenteController);


module.exports = router;

// cons
