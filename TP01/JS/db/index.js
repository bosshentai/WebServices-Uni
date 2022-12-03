// import Sequelize from 'sequelize'
// import db_config from '../config/database'
const Sequelize = require('sequelize')
const db_config = require("../config/database")

const dbConn = new Sequelize(db_config)
// const dbConn = new Sequelize(
//   process.env.D
//   ,{
//     host:
//   }
// )


const connect = async () => {
  try {
    await dbConn.authenticate();
    console.log("Connection has been stabilized sucessfully")
  } catch (error) {
    console.error('Unable to connect to the database:',error);
  }
}

connect();

const Aula = require('../models/Aula')
const Curso = require('../models/Curso')
const Departamento  = require('../models/Departamento')
const Disciplina = require('../models/Disciplina')
const Docente = require('../models/Docente')
const Dsd = require('../models/Dsd')
const EdicaoDisciplina = require("../models/EdicaoDisciplina")
const Horario = require('../models/Horario')
const PlanoCurso = require('../models/PlanoCurso')
const User = require('../models/User')



Aula.init(dbConn)
Curso.init(dbConn)
Disciplina.init(dbConn)
Departamento.init(dbConn)
Docente.init(dbConn)
Dsd.init(dbConn)
EdicaoDisciplina.init(dbConn)
Horario.init(dbConn)
PlanoCurso.init(dbConn)
User.init(dbConn)

Aula.associate(dbConn.models)
Curso.associate(dbConn.models)
Disciplina.associate(dbConn.models)
Docente.associate(dbConn.models)
EdicaoDisciplina.associate(dbConn.models)
Horario.associate(dbConn.models)


module.exports = dbConn
