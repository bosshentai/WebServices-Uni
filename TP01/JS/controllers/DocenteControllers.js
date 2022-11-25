// const { UPSERT } = require('sequelize/types/query-types')
// const { Sequelize } = require('sequelize')
const  bcrypt  = require('bcryptjs')
const Docente = require('../models/Docente')
const User = require('../models/User')

const defaultPass = 'lala123'

// const defaultPass = process.env.DEFAULr_USER_PASSWORD

const lerTodosDocentes = async (req, res) => {
  try {
    const listaDocentes = await Docente.findAll()
    return res.status(200).json(listaDocentes)
  } catch (e) {
    return res
      .status(500)
      .json({ error: 'Problema de coneccao' })
  }
}

const criarDocente = async (req, res) => {
  const {
    sigla,
    nome,
    nome_completo,
    grau,
    area,
    email,
    tipo_contrato,
  } = req.body
  const pe1 = nome_completo.substring(
    0,
    nome_completo.indexOf(' '),
  )
  const pe2 = nome_completo.substring(
    nome_completo.lastIndexOf(' '),
  )
  let userName = pe1 + pe2;

  console.log("pe1 " + pe1);
  console.log("pe2 " + pe2);

  console.log("userName antes " +userName);

  try {
    const docente = await Docente.create({
      sigla,
      nome,
      nome_completo,
      grau,
      area,
      tipo_contrato,
      id_user: null,
    })

    if (!docente) {
      return res.status(400).json({
        Error:
          'Nao foi possivel processar pedido.Verificar se os parametros estao corretos',
      })
    }

    const password = await bcrypt.hash(
      defaultPass,
      await bcrypt.genSalt(10),
    )

    console.log("Password gerado " + password);

    console.log("Nome " + nome);
    console.log("email "+ email);
    console.log("Username " + userName)


    const user = await User.create({
      nome,
      username: userName,
      email,
      password,
      categoria: 'docente',
    })

    // console.log("Nome "+user.nome)


    if (!user) {
      await Docente.destroy({
        where: { id: docente.dataValues.id },
      })
      return res.status(400).json({
        Error:
          'Nao foi possivel processar pedido. Verifique se os parametros estao conrrectos',
      })
    }

    const { id: id_user } = user.dataValues
    console.log("user id " + id_user)
    console.log("Docente id" + docente.id)
    await Docente.update(
      { id_user },
      { where: { id: docente.id } },
    )

    res.status(201).json({ docente, user })
  } catch (e) {
    return res.status(500).json(e)
  }
}

const lerUmDocente = async (req, res) => {
  const { id } = req.params

  try {
    const docente = await Docente.findByPk(id)

    if (!docente) {
      return res
        .status(400)
        .json({ Error: 'Docente nao encontrado' })
    }

    return res.status(200).json(docente)
  } catch (e) {
    // return res
    //   .status(500)
    //   .json({ Error: 'Problema de conecao' })
    return res.status(500).json(e)
  }
  // return res.status(200)
}

module.exports = {
  lerTodosDocentes,
  criarDocente,
  lerUmDocente,
}
