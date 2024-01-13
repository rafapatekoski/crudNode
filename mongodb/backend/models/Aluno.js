const mongoose = require("mongoose")

const { Schema } = mongoose;

const alunoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    ra: {
        type: String,
        required: true
    },
    serie: {
        type: String,
        required: true
    },
    sala: {
        type: String,
        required: true
    },
    chamada: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    laudo: {
        type: String,
        required: true
    },
    entrada: {
        type: String,
        required: true
    },
    saida: {
        type: String,
        required: true
    },
   

},
 { timestamps: true}
)

const Aluno = mongoose.model("Aluno", alunoSchema)

module.exports = {
    Aluno,
    alunoSchema
}