// const { UPSERT } = require('sequelize/types/query-types')
const { Sequelize } = require('sequelize')
const Docente = require('../models/Docente')
const User = require('../models/User');


const lerTodosDocentes = async (req, res) => {
  try {
    const listaDocentes = await Docente.findAll()
    return res.status(200).json(listaDocentes)
  } catch (e) {
    return res.status(500).json({ error: 'Lista Vazia' })
  }
}

const criarDocente = async (req, res) => {
  // user
  // nome , username. email,password, categoria

  // docente
  // sigla , nome, nome_completo, ocupacao , grau, tipo_contrato

  const {
    username,
    email,
    password,
    categoria,
    sigla,
    nome,
    nome_completo,

    grau,
    tipo_contrato,
  } = req.body

  console.log(req.body);

  try {

    const newDocente = await User.create(
      {nome,
      username,
      email,
      password,
      categoria,
      docente:{
        nome,
        nome_completo,
        grau,
        tipo_contrato
      },

    },{
      include: [Docente]
    }
    )
    // const newDocente = await Docente.create(
    //   {
    //     sigla,
    //     nome,
    //     nome_completo,
    //     grau,

    //     user: {
    //       nome,
    //       username,
    //       email,
    //       password,
    //       categoria,
    //     },
    //   },
    //   {
    //     include: [User]
    //   }
    // )

    return res.status(201).json(newDocente)
  } catch (e) {
    return res.status(500).json({ error: 'Error Register' })
  }

}

module.exports = {
  lerTodosDocentes,
  criarDocente

}
//   lerTodosDocentes: async (req, res) => {
//     try {
//         console.log("docente")

//         // const docente = await Docente.findByPk(1)
//         // console.log("docente")
//         // console.log(docente)
//         const docentes = await Docente.findAll()
//         return res.status(200).json(docentes)
//     }
//     catch (error) {
//         //console.log(res.json(error))
//         return res.status(500).json(error.message)
//     }
// }


  // criarDocente,


// const learTodosDocentes
