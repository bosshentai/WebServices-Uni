

const Departamento = require('../models/Departamento')

const lerTodosDepartamentos = async (req,res)=>{

  try {
    const listaDepartamentos = await Departamento.findAll()

    return res.status(200).json(listaDepartamentos)

  } catch (error) {
    return res.status(500).json({Error:"Problema de conecao"})
  }
}


const lerUmDepartamento = async (req, res)=>{

  const {id} = req.params

  try {

    const departamento = await Departamento.findByPk(id);

    if(!departamento){
      return res.status(400).json({Error:"Departamento nao encontrado"})
    }

    return res.status(200).json(departamento)
  } catch (e) {
    return res.status(500).json({Error: "Problema de conecao"})
  }
}



module.exports = {
  lerTodosDepartamentos,
  lerUmDepartamento

}