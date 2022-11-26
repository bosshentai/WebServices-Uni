const express = require('express')
const {
  getAllDepartamentos,
  getOneDepartamento,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento
} = require('../controllers/DepartamentoController')

const router = express.Router()
router.use(express.json())

const getAllDepartamentosController = getAllDepartamentos
const getOneDepartamentoController = getOneDepartamento
const createDepartamentoController = createDepartamento
const updateDepartamentoController = updateDepartamento
const deleteDepartamentoController = deleteDepartamento

router.get('/', getAllDepartamentosController)
router.get('/:id',getOneDepartamentoController)

router.post('/newdepartamento',createDepartamentoController)

router.put("/:id",updateDepartamentoController)

router.delete('/:id',deleteDepartamentoController)

module.exports = router