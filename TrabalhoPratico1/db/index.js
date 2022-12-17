const Sequelize = require("sequelize")
const db_config = require("../config/database")


const dbConn = new Sequelize(db_config)



const connect = async () =>{
  try {
    await dbConn.authenticate();
    console.log("Connection has been stabilized successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}
connect();

const Cliente = require('../models/Cliente')
const Barco = require('../models/Barco')
const Viagem = require('../models/Viagem')

// const Viagem = require('../models/Viagem');
// const Carga = require('../models/Carga');
// const Passageiro = require("../models/Passageiro");

Cliente.init(dbConn)
Barco.init(dbConn)
Viagem.init(dbConn)


Barco.associate(dbConn.models)
Viagem.associate(dbConn.models)


// Viagem.init(dbConn)
// Carga.init(dbConn)
// Passageiro.init(dbConn)

// Carga.associate(dbConn.models)
// Passageiro.associate(dbConn.models)






module.exports = dbConn


