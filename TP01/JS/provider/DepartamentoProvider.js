const Departamento = require("../models/Departamento")



 const getOneD  = async (id) => {

  const departamentoExist = await Departamento.findByPk(id)


  // if (!departamentoExist){
  //   return res
  // }


  return departamentoExist;

}



module.exports = {
  getOneD
}
