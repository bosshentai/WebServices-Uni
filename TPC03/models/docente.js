import mongoose from "mongoose";

const Schema = mongoose.Schema;

const docenteSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,

  },
  sigla: {type: String, required:true},
  nome: {type: String,required: true},
  email:{type: String, required: true},
  createAt: {type: Date, required: true},
  updateAt: {type: Date, required: true}
}
)

export const Docente = mongoose.model("Docentes", docenteSchema)


// module.exports = mongoose.model("Docentes",docenteSchema)