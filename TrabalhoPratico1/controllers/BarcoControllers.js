const {
  getAllBarco,
  getOne,
} = require('../provider/BarcoProvider')
const {
  isAgent,
  getClientIDFromToken,
} = require('../provider/ClienteProvider')
// const Client = require('../models/Cliente')

const getAllClientBarco = async (req, res) => {
  // const { token } = req.headers

  try {
    //   if (!token) {
    //     return res
    //       .status(401)
    //       .json({ Error: 'Nao autorizado' })
    //   }

    //   const clientIsAgent = await isAgent(token)

    //   if (clientIsAgent !== 'AGENTE') {
    //     return res
    //       .status(401)
    //       .json({ Error: 'Cliente nao autorizado' })
    // }

    // const clientId = await getClientIDFromToken(token)

    // const lista = await getAllBarco(clientId)

    const lista = await getAllBarco()

    return res.status(200).json(lista)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Error de conection' })
  }
}

const getOneBarco = async (req, res) => {
  const { id } = req.params

  try {
    const barco = await getOne(id)

    if (barco === null) {
      return res
        .status(404)
        .json({ Error: 'Barco nao encontrado' })
    }

    // if (!barco) {
    //   res
    //     .status(404)
    //     .json({ Error: 'Barco nao encontrado' })
    // }

    return res.status(200).json(barco)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const postBarco = async (req, res) => {}

module.exports = {
  getAllClientBarco,
  postBarco,
  getOneBarco,
}
