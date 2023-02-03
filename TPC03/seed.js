import mongoose from "mongoose"

// import { connection } from 'mongoose'
// import { Docente } from "./models/docente"
import {Docente} from './models/docente.js'

const generateDocenteData = async () => {
  const data = [
    {
      sigla:"BMH",
      nome:"Estanislau Morais Baptista",
      email: "baptistamhernani@gmail.com",
      createAt: new Date(),
      updateAt: new Date()
    },
    {
      sigla: 'PS',
      nome: 'Paulo Silva',
      email: 'paulosilva@gmail.com',
      createAt: new Date(),
      updateAt: new Date(),
    },
    {
      sigla: 'EL',
      nome: 'Estanislau Lima',
      email: 'tiolau@gmail.com',
      createAt: new Date(),
      updateAt: new Date(),
    },
  ]

  for (let i = 0; i <= data.length; i++) {
    try {
      const insertData = new Docente(data[i])


      await insertData.save()

    } catch (error) {
      throw new Error(error);
    }
  }

  mongoose.connection.close()
}

generateDocenteData()
