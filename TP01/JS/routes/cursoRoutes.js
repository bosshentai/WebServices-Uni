const express = require('express');
const {lerTodosCursos, criarCurso} = require('../controllers/CursoController');


const router = express.Router();
router.use(express.json())


const lerTodosCursosController = lerTodosCursos
const criarCursoController = criarCurso


router.get('/',lerTodosCursosController);
router.post('/',criarCursoController);


module.exports = router;