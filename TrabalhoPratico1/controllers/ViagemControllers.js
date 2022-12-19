const {
  createViagem,
} = require('../provider/ViagemProvider')

const { isAgent } = require('../provider/ClienteProvider')

const postViagem = async (req, res) => {
  const { token } = req.headers

  const {
    imo,
    porto_partida,
    porto_destino,
    hora_partida,
    hora_chegada,
  } = req.body

  try {
    if (!token) {
      return res
        .status(401)
        .json({ Error: 'Nao Autorizado' })
    }

    const clientIsAgent = await isAgent(token)

    if (clientIsAgent !== 'AGENTE') {
      return res
        .status(401)
        .json({ Error: 'Client nao autorizado' })
    }

    const newViagem = await createViagem(
      imo,
      porto_partida,
      porto_destino,
      hora_partida,
      hora_chegada,
    )

    if (!newViagem) {
      return res.status(400).json({
        Error: 'Nao foi possível processar pedido',
      })
    }

    return res.status(201).json(newViagem)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problem to connect' })
  }
}

module.exports = {
  postViagem,
}
