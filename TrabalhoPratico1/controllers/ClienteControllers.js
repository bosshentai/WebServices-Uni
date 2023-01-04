
const {createCliente} = require('../provider/ClienteProvider')

const postCliente = async(req,res) =>{
  const {name,tipo} = req.body

  try {

    // console.log('Controller Name: ' + name);
    // console.log("Controller Tipo: " + tipo);

    const newCliente = await createCliente(
      name,tipo
    )


    if(!newCliente){
      return res.status(400).json({
        Error: "Nao foi possível processar pedido"
      })
    }

    return res.status(201).json(newCliente);
  } catch (error) {
    return res.status(500).json({Error: "Error de conexão"})
  }
}


module.exports = {
  postCliente
}