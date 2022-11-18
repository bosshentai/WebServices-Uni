// const { Sequelize} = require('sequelize');
const Curso = require('../models/Curso')

const lerTodosCursos = async (req, res) => {
  try {
    const listaCursos = await Curso.findAll()

    return res.status(201).json(listaCursos)
  } catch (e) {
    return res.status(500).json({ error: 'Empty list' })
  }
}

const criarCurso = async (req, res) => {

  // const { sigla, nome, conferegrau } = req.body

  try {


  const curso =  {
    sigla : req.body.sigla,
    nome: req.body.nome,
    conferegrau: req.body.conferegrau
  }


  const newCurso = await curso.create(curso);
      // const newCurso = await Curso.create({
      //   // sigla: req.body.sigla,
      //   // nome: req.body.nome,
      //   // conferegrau: req.body.conferegrau

      //   sigla: new String(sigla),
      //   nome: new String(nome),
      //   conferegrau : new String( conferegrau)
      // })

      return res.status(201).json(newCurso);
    // return res.status(201).json(req.body)
  } catch (e) {
    return res.status(500).json({ error: 'Error ' })
  }
}

module.exports = { lerTodosCursos, criarCurso }
