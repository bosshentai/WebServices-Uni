const express = require('express')

const {postCliente} = require('../controllers/ClienteControllers')


const router = express.Router()
router.use(express.json())



router.post('/',postCliente)

module.exports = router