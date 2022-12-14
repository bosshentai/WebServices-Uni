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

const Viagem = require('../models/Viagem');
const Carga = require('../models/Carga');
const Passageiro = require("../models/Passageiro");




Viagem.init(dbConn)
Carga.init(dbConn)
Passageiro.init(dbConn)

Carga.associate(dbConn.models)
Passageiro.associate(dbConn.models)






module.exports = dbConn


