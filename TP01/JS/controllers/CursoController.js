// const { Sequelize} = require('sequelize');
const Curso = require('../models/Curso')

const getAllCursos = async (req, res) => {
  try {
    const listaCursos = await Curso.findAll()

    return res.status(201).json(listaCursos)
  } catch (e) {
    return res.status(500).json({ error: 'Empty list' })
  }
}

const getOneCurso = async (req, res) => {
  const { id } = req.params

  try {
    const curso = await Curso.findByPk(id)

    if (!curso) {
      return res
        .status(400)
        .json({ Error: 'Curso nao encontrado' })
    }

    return res.status(200).json(curso)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const createCurso = async (req, res) => {
  // const { sigla, nome, conferegrau } = req.body

  try {
    const curso = {
      sigla: req.body.sigla,
      nome: req.body.nome,
      conferegrau: req.body.conferegrau,
    }

    const newCurso = await curso.create(curso)

    if (!newCurso) {
      return res
        .status(400)
        .json({
          Error:
            'Nao foi possivel processar pedido. Verifca se os paramentros estao corretos',
        })
    }

    return res.status(201).json(newCurso)
    // return res.status(201).json(req.body)
  } catch (e) {
    return res.status(500).json({ error: 'Error ' })
  }
}


const updateCurso = async(req, res) =>{
  const {nome} = req.body
  const {id} = req.params


  try{
    const cursoExist = await Curso.findByPk(id);
  }catch(e){
    return res.status(400).json(e)
  }


}


module.exports = { getAllCursos, createCurso, getOneCurso }
