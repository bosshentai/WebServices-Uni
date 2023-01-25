import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cursoSchema = new Schema({
  codigo: { type: String },
  nome: { type: String },
  grau: String,
  // grau: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Grau',
  // },
  ano: { type: String },
})

export const Curso = mongoose.model('Cursos', cursoSchema)

// module.exports = {Curso}
