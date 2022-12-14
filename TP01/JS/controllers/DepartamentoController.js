// import { getOneD } from '../provider/DepartamentoProvider'
const Departamento = require('../models/Departamento')
const {
  getOneD,
  getAllD,
  createD,
  updateD,
  deleteD,
} = require('../provider/DepartamentoProvider')

const getAllDepartamentos = async (req, res) => {
  try {
    // const listaDepartamentos = await Departamento.findAll()

    const listaDepartamentos = await getAllD()

    return res.status(200).json(listaDepartamentos)
  } catch (error) {
    return res
      .status(500)
      .json({ Error: 'Problema de conecao' })
  }
}

const getOneDepartamento = async (req, res) => {
  const { id } = req.params

  try {
    const departamento = await getOneD(id)

    // const departamento = await Departamento.findByPk(id)

    if (!departamento) {
      return res
        .status(400)
        .json({ Error: 'Departamento nao encontrado' })
    }

    return res.status(200).json(departamento)
  } catch (e) {
    return res
      .status(500)
      .json({ Error: 'Problema de conecao' })
  }
}

const createDepartamento = async (req, res) => {
  const { nome } = req.body

  try {
    const newDepartamento = await createD(nome)

    // const newDepartamento = await Departamento.create({
    //   nome: nome,
    // })

    if (!newDepartamento) {
      return res.status(400).json({
        Error:
          'Nao foi possivel processar pedido.Verifca se os paramentros estao corretos',
      })
    }
    return res.status(201).json(newDepartamento)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const updateDepartamento = async (req, res) => {
  const { id } = req.params
  const { nome } = req.body

  try {
    const departamentoExist = await getOneD(id)

    // const departamentoExist = await Departamento.findByPk(
    //   id,
    // )

    if (!departamentoExist) {
      return res
        .status(400)
        .json({ Error: 'Departamento nao encontrado' })
    }

    const updateDepartamento = await updateD(id, nome)

    if (updateDepartamento === null) {
      return res.status(404).json({
        Error: 'Nao foi possivel processar pedido',
      })
    }

    return res.status(204).json(updateDepartamento)
  } catch (error) {
    return res.status(500).json({ Error: 'Erro' })
  }
}

const deleteDepartamento = async (req, res) => {
  const { id } = req.params

  try {
    const departamentoExist = await getOneD(id)
    // const departamentoExist = await Departamento.findByPk(
    //   id,
    // )

    if (!departamentoExist) {
      return res
        .status(400)
        .json({ Error: 'Departamento nao encontrado' })
    }

    const destroyedDepartamento = await deleteD(id)

    // const destroyedDepartamento =
    //   await Departamento.destroy({ where: { id } })

    // console.log('Deleted: ' + destroyedDepartamento)

    if (!destroyedDepartamento) {
      return res.status(404).json({
        Error:
          'Nao foi possivel processar pedido.Verifica se os paramentros estao corretos',
      })
    }

    return res.status(200).json(destroyedDepartamento)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAllDepartamentos,
  getOneDepartamento,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento,
}
