const express = require('express')



const {getAllHorario,getOneHorario,createHorario,updateHorario,deleteHorario} = require('../controllers/HorarioController')


const router = express.Router()

router.use(express.json())



const getAllHorarioController = getAllHorario
const getOneHorarioController = getOneHorario
const createHorarioController = createHorario
const updateHorarioController = updateHorario
const deleteHorarioController = deleteHorario


router.get('/',getAllHorarioController)
router.get('/:id', getOneHorarioController)
router.post('/',createHorarioController)
router.put('/:id', updateHorarioController)
router.delete("/:id", deleteHorarioController)



module.exports = router

