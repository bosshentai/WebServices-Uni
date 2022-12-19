const express = require('express')

const {postViagem} = require('../controllers/ViagemControllers')

const router = express.Router()
router.use(express.json())


router.post('/',postViagem)

module.exports = router


