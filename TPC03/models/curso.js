import mongoose from 'mongoose'
// import { Disciplina } from './disciplina'

const Schema = mongoose.Schema

const cursoSchema = new Schema({
  codigo: { type: String, required: true },
  nome: { type: String, required: true },
  grau: {
    type: String,
    enum: ['Licenciatura', 'Mestrado', 'Doutoramento'],
    required: true,
  },
  ano: { type: Number, required: true },

  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },

})

export const Curso = mongoose.model('Cursos', cursoSchema)
