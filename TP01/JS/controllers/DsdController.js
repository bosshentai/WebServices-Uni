// const { create } = require('../models/Dsd')
const { response } = require('express')
const {getAllD,getOneD,createD,updateD,existD,deleteD} =require('../provider/dsdProvider')


const getAllDsd = async(req,res) =>{

  try{

    const listaDsd = await getAllD()


    return res.status(200).json(listaDsd)
  }catch(e){
    return res.status(500).json({Error:"Problema de conexao"})
  }
}

const getOneDsd = async(req,res) =>{
  const {id} = req.params

  try {
    const dsd = await getOneD(id)

    if(!dsd){
      return res.status(404).json({Error:" dsd nao encontrado"})
    }

    return res.status(200).json(dsd)
  } catch (e) {
    return res.status(500).json({Error:"Problema de conexao"})
  }
}

const createDsd = async(req,res) =>{
  const {id_docente,id_disciplina,funcao} = req.body

  try {
    const newDsd = await createD(
      id_docente,
      id_disciplina,
      funcao
    )

    if(!newDsd){
      return res.status(400).json({Error: "Nao foi possivel processar pedido"})
    }

    return res.status(201).json(newDsd)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const updateDsd = async(req,res) =>{
  const {id} = req.params


  const {
    id_docente,
    id_disciplina,
    funcao
  } = req.body


  try {

    const dsdExist = await existD(id)

    if(dsdExist ===false){
      return res.status(404).json({
        Error: "Dsd nao encontrado"
      })
    }

    const updatedDsd = await updateD(id,id_docente,id_disciplina,funcao)


    if(updateDsd === null){
      return res.status(404).json({Error:"Nao foi possivel processar pedido"})
    }

    return res.status(204).json(updatedDsd)
  } catch (e) {
    return res.status(500).json({Error:"Error de conexão"})
  }
}




const deleteDsd = async(req,res)=>{
  const {id} = req.params

  try{

    const dsdExist = await existD(id)
    if(dsdExist ===false){
      return res.status(404).json({Error:"Nao foi possivel processar pedido"})
    }

    const destroyedDsd = deleteD(id)

    if(!destroyedDsd){
      return res.status(404).json({Error: "Nao foi possivel processar pedido"})
    }


    return res.status(200).json(destroyedDsd)

  }catch(e){
    return res.status(500).json(e)
  }
}
module.exports = {
  getAllDsd,
  getOneDsd,
  createDsd,
  updateDsd,
  deleteDsd
}