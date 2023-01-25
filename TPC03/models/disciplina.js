import mongoose from "mongoose";

const Schema = mongoose.Schema;


const disciplinaSchema = new Schema({
  sigla: String,
  nome: String,
  horas: Int,
  sinopse: String,

})


export const Disciplina = mongoose.model("Disciplinas", disciplinaSchema)





