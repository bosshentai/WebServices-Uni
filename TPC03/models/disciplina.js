import mongoose from 'mongoose'

const Schema = mongoose.Schema

const disciplinaSchema = new Schema({
  // id: {
  //   type: Schema.Types.ObjectId,
  // },
  sigla: { type: String, required: true },
  nome: { type: String, required: true },
  horas: { type: Number, required: true },
  sinopse: { type: String, required: true },
  docenteId: {
    type: Schema.Types.ObjectId,
    ref: 'Docentes',
  },
  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },
})

export const Disciplina = mongoose.model(
  'Disciplinas',
  disciplinaSchema,
)
