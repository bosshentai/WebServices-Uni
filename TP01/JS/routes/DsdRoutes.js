const express = require('express')

const {
  getAllDsd,
  getOneDsd,
  updateDsd,
  deleteDsd,
} = require('../controllers/DsdController')

const router = express.Router()
router.use(express.json())

const getAllDsdController = getAllDsd
const getOneDsdController = getOneDsd
const updateDsdController = updateDsd
const deleteDsdController = deleteDsd

router.get('/', getAllDsdController)

module.exports = router
