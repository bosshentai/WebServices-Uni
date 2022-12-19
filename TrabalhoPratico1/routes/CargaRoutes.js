const express = require('express')

const {
  postCarga,
  getAllCargaList,
  getSelectedCarga
} = require('../controllers/CargaControllers')

const router = express.Router()
router.use(express.json())

router.post('/', postCarga)
router.get('/', getAllCargaList)
router.get('/:id',getSelectedCarga)

module.exports = router
