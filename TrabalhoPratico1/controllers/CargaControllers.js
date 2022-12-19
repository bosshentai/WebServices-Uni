const {
  getAllCarga,
  getOneCarga,
  createCarga,
} = require('../provider/CargaProvider')

const { isAgent } = require('../provider/ClienteProvider')

const postCarga = async (req, res) => {
  const { token } = req.headers

  const { id_viagem, quantidade_carga } = req.body

  try {
    if (!token) {
      return res
        .status(401)
        .json({ Error: 'Nao Autorizado' })
    }

    const clientIsAgent = await isAgent(token)

    if (clientIsAgent !== 'AGENTE') {
      res.status
        .status(401)
        .json({ Error: 'Client nao autorizado' })
    }

    const newCarga = await createCarga(
      id_viagem,
      quantidade_carga,
    )

    if (!newCarga) {
      return res.status(400).json({
        Error: 'Nao foi possível processar pedido',
      })
    }

    return res.status(201).json(newCarga)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const getAllCargaList = async (req, res) => {
  try {
    const cargaList = await getAllCarga()

    if (!cargaList) {
      return res.status(401).json({ Error: 'lista vazia' })
    }

    return res.status(200).json(cargaList)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const getSelectedCarga = async (req, res) => {
  const { id } = req.params

  try {
    const selected = await getOneCarga(id)

    if (selected === null) {
      return res
        .status(404)
        .json({ Error: 'Carga nao encontrada' })
    }

    return res.status(200).json(selected)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  postCarga,
  getAllCargaList,
  getSelectedCarga,
}
