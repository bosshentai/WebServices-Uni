const Viagem = require('../models/Viagem');


const createViagem = async (imo,porto_partida,porto_destino,hora_partida,hora_chegada) =>{

  const newViagem = await Viagem.create({
    imo:imo,
    porto_partida,
    porto_destino,
    hora_partida,
    hora_chegada
  })


  // console.log(newViagem)


  return newViagem;
}



module.exports = {
  createViagem
}

