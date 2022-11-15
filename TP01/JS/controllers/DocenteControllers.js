const Docente = require('../models/Docente')

const lerTodosDocentes = async (req, res) => {
  try {
    const listaDocentes = await Docente.findAll()
    return res.status(200).json(listaDocentes)
  } catch (e) {
    return res.status(500).json({ error: 'Lista Vazia' })
  }
}

module.exports = {
  lerTodosDocentes
}

// const learTodosDocentes
