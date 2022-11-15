const express = require('express');
const { lerTodosDocentes } = require('../controllers/DocenteControllers');
// import { Router } from "express"

const router = express.Router()
router.use(express.json())


const lerTodosDocentesController = lerTodosDocentes

router.get('/',lerTodosDocentesController);


module.exports = router;

// cons
