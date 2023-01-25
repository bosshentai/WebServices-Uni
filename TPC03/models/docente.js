import mongoose from "mongoose";

const Schema = mongoose.Schema;

const docenteSchema = new Schema({
  codigo:id,
  sigla: String,
  nome: String,
  email:String,

}
)

export const Docente = mongoose.model("Docentes", docenteSchema)


// module.exports = mongoose.model("Docentes",docenteSchema)