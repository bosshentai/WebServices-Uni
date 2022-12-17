const express = require('express')

const {
  getAllClientBarco,
  getOneBarco
} = require('../controllers/BarcoControllers')

const router = express.Router()
router.use(express.json())

router.get('/', getAllClientBarco)
router.get('/:id', getOneBarco)

module.exports = router
