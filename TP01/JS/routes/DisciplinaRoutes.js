const express = require('express')
const { getAllDisciplina } = require('../controllers/DisciplinaController')

const router = express.Router()
router.use(express.json())


const getAllDisciplinaController = getAllDisciplina



router.get('/',getAllDisciplinaController)


module.exports = router