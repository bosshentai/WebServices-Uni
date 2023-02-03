import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cursoDisciplinaSchema = new Schema({
  cursoId: {
    type: Schema.Types.ObjectId,
    ref: 'Cursos',
    required: true,
  },
  disciplinaId: {
    type: Schema.Types.ObjectId,
    ref: 'Disciplinas',
    required: true,
  },

  createAt: { type: Date, required: true },
})

export const CursoDisciplina = mongoose.model(
  'CursosDisciplinas',
  cursoDisciplinaSchema
)