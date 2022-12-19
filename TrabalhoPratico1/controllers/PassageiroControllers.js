const {
  getAllPassageiro,
  getOnePassageiro,
  createPassageiro,
} = require('../provider/PassageiroProvider')

const { isAgent } = require('../provider/ClienteProvider')

const postPassageiro = async (req, res) => {
  const { token } = req.headers
  const { id_viagem, quantidade_passageiro } = req.body

  try {
    if (!token) {
      return res
        .status(401)
        .json({ Error: 'Nao autorizado' })
    }

    const clientIsAgent = await isAgent(token)

    if (clientIsAgent !== 'AGENTE') {
      return res
        .status(401)
        .json({ Error: 'Cliente nao autorizado' })
    }

    const newPassageiro = await createPassageiro(
      id_viagem,
      quantidade_passageiro,
    )

    if (!newPassageiro) {
    }

    return res.status(201).json(newPassageiro)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const getAllPassageiroList = async (req, res) => {
  try {
    const passageiroList = await getAllPassageiro()

    if (!passageiroList) {
      return res.status(401).json({ Error: 'Lista vazia' })
    }

    return res.status(200).json(passageiroList)
  } catch (e) {
    return res.status(500).json(e)
  }
}

const getSelectedPassageiro = async (req, res) => {
  const { id } = req.params
  try {
    const selected = await getOnePassageiro(id)

    if (selected === null) {
      return res
        .status(404)
        .json({ Error: 'Passageiro nao encontrado' })
    }

    return res.status(200).json(selected)
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  postPassageiro,
  getAllPassageiroList,
  getSelectedPassageiro,
}
