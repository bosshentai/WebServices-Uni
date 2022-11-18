// const { UPSERT } = require('sequelize/types/query-types')
const { Sequelize } = require('sequelize')
const Docente = require('../models/Docente')
// const User = require('../models/User')

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
    ocupacao,
    grau,
    tipo_contrato,
  } = req.body

  console.log(req.body);

  try {
    const newDocente = await Docente.create(
      {
        sigla,
        nome,
        nome_completo,
        ocupacao,
        grau,
        tipo_contrato,
        user: {
          nome,
          username,
          email,
          password,
          categoria,
        },
      },
      {
        include: [User]
      }
    )

    return res.status(201).json(newDocente)
  } catch (e) {
    return res.status(500).json({ error: 'Error Register' })
  }

  // try{

  //   const newDocente= await User.create({
  //     nome: nome,
  //     username: username,
  //     email: email,
  //     password: password,
  //     categoria: categoria,
  // },{
  //   include:[{

  //   }]
  // })
  //   //   Docente:{
  //   //     sigla,
  //   //     nome,
  //   //     nome_completo,
  //   //     ocupacao,
  //   //     grau,
  //   //     tipo_contrato
  //   //   }
  //   // })
  //   return res.status(201).json(newDocente);
  // }catch(e){
  //   return res.status(500).json({error: "Error Register"});
  // }

  // console.log(sigla)
  // try {

  //   const novoDocente = await User.create(
  //     {

  //     }
  //   )

  //   // const novoDocente = await Docente.create({
  //   //   sigla,
  //   //   nome,
  //   //   nome_completo,
  //   //   ocupacao,
  //   //   grau,
  //   //   tipo_contrato,
  //   // })

  //   console.log(novoDocente)

  //   return res.status(200).json(novoDocente)
  // } catch (e) {
  //   return res.status(500).json({ error: 'Error Insert' })
  // }
}

module.exports = {
  lerTodosDocentes,
  criarDocente,
}

// const learTodosDocentes
