const EdicaoDisciplina = require('../models/EdicaoDisciplina')
const {
  getAllED,
  getOneED,
} = require('../provider/EdicaoDisciplinaProvider')

const getAllEdicaoDisciplina = async (req, res) => {

  // console.log("Here")
  try {
    const listaEdicaoDisciplina = await getAllED()

    // const listaEdicaoDisciplina = await EdicaoDisciplina.findAll()

    console.log(listaEdicaoDisciplina)
    // console.log(JSON.stringify(listaEdicaoDisciplina))

    return res
      .status(200)
      .json(listaEdicaoDisciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conexão' })
  }
}

const getOneEdicaoDisciplina = async (req, res) => {
  const { id } = req.params

  try {
    const edicaoDisciplina = await getOneED(id)

    if (!edicaoDisciplina) {
      return res
        .status(404)
        .json({ Error: 'EdicaoDisciplina nao encontrado' })
    }

    return res.status(200).json(edicaoDisciplina)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conecao' })
  }
}

// const createEdicaoDisciplina = async (req, res) => {
//   const { id } = req.params
//   const { edicao, estado, ano_lectivo, periodo } = req.body
// }

module.exports = {
  getAllEdicaoDisciplina,
  getOneEdicaoDisciplina,
}
