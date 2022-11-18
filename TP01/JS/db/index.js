// import Sequelize from 'sequelize'
// import db_config from '../config/database'
const Sequelize = require('sequelize')
const db_config = require("../config/database")

const dbConn = new Sequelize(db_config)

const connect = async () => {
  try {
    await dbConn.authenticate();
    console.log("Connection has been stabilized sucessfully")
  } catch (error) {
    console.error('Unable to connect to the database:',error);
  }
}

connect();

const Curso = require('../models/Curso')
const Disciplina = require('../models/Disciplina')
const Departamento  = require('../models/Departamento')
const Docente = require('../models/Docente')

Curso.init(dbConn)
Disciplina.init(dbConn)
Departamento.init(dbConn)
Docente.init(dbConn)


module.exports = dbConn
