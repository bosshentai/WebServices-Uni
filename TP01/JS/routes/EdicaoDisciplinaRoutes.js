const express = require('express')
const {
  getAllEdicaoDisciplina,
  getOneEdicaoDisciplina,
  createEdicaoDisciplina,
  updateEdicaoDisciplina,
  deleteEdicaoDisciplina
} = require('../controllers/EdicaoDisciplinaControllers')

const router = express.Router()
router.use(express.json())

const getAllEdicaoDisciplinaController =
  getAllEdicaoDisciplina
const getOneEdicaoDisciplinaController =
  getOneEdicaoDisciplina
const createEdicaoDisciplinaController =
  createEdicaoDisciplina
const updateEdicaoDisciplinaController =
  updateEdicaoDisciplina

const deleteEdicaoDisciplinaController = deleteEdicaoDisciplina

router.get('/', getAllEdicaoDisciplinaController)
router.get('/:id', getOneEdicaoDisciplinaController)
router.post('/', createEdicaoDisciplinaController)
router.put('/:id', updateEdicaoDisciplinaController)
router.delete('/:id', deleteEdicaoDisciplinaController)

module.exports = router
