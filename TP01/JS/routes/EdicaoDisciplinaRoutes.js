const express = require('express')
const { getAllEdicaoDisciplina, getOneEdicaoDisciplina } = require('../controllers/EdicaoDisciplinaControllers')



const router = express.Router()
router.use(express.json())


const getAllEdicaoDisciplinaController =  getAllEdicaoDisciplina
const getOneEdicaoDisciplinaController = getOneEdicaoDisciplina




router.get('/',getAllEdicaoDisciplinaController)
router.get('/:id',getOneEdicaoDisciplinaController)




module.exports = router


