import mongoose from "mongoose";

const Schema = mongoose.Schema;

const grauSchema = new Schema({
    name: {type: String},
    grau: {type: String ,enum:['Licenciatura','Mestrado','Doutoramento']}
})

export const Grau = mongoose.model('Grau', grauSchema)