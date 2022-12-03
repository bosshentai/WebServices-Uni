const express = require('express')

const {getAllAula,getOneAula,createAula,updateAula,deleteAula} = require('../controllers/AulaControllers')

const router = express.Router()
router.use(express.json())

const getAllAulaController = getAllAula
const getOneAulaController = getOneAula
const createAulaController = createAula
const updateAulaController = updateAula
const deleteAulaController = deleteAula


router.get('/',getAllAulaController)
router.get("/:id",getOneAulaController)
router.post('/',createAulaController)
router.put("/:id", updateAulaController)
router.delete("/:id",deleteAulaController)

module.exports = router