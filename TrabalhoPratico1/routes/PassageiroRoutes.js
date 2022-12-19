const express = require('express')
const {
  postPassageiro,
  getAllPassageiroList,
  getSelectedPassageiro,
} = require('../controllers/PassageiroControllers')

const router = express.Router()
router.use(express.json())

router.post('/', postPassageiro)
router.get('/', getAllPassageiroList)
router.get('/:id', getSelectedPassageiro)
// router.get('/', getAllCargaList)

module.exports = router
