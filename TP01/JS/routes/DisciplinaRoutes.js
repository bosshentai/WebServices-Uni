const express = require('express')
const {
  getAllDisciplina,
  getOneDisciplina,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
} = require('../controllers/DisciplinaController')

const router = express.Router()
router.use(express.json())

const getAllDisciplinaController = getAllDisciplina
const getOneDisciplinaController = getOneDisciplina
const createDisciplinaController = createDisciplina
const updateDiscplinaController = updateDisciplina
const deleteDisciplinaController = deleteDisciplina

router.get('/', getAllDisciplinaController)
router.get('/:id', getOneDisciplinaController)
router.post('/', createDisciplinaController)
router.put('/:id', updateDiscplinaController)
router.delete('/:id', deleteDisciplinaController)

module.exports = router
