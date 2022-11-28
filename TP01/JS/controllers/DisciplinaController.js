// const Disciplina = require('../models/Disciplina')
const {getAllDisc} = require('../provider/DisciplinaProvider')
const getAllDisciplina = async (req, res) => {
  try {
    const listDisciplina = await getAllDisc()

    return res.status(201).json(listDisciplina)
  } catch (error) {
    return res.status(500).json({ Error: 'Empty list' })
  }
}
const getOneDisc = async (req,res) =>{
  const {id} = req.params


  try {
    
  } catch (e) {
    
  }
}


module.exports={
  getAllDisciplina
}