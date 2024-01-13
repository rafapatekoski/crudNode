const {Aluno: alunoModel} = require("../models/Aluno")
const mongoose = require("mongoose")

const alunoController = {
    create: async(req, res) => {
        try {
            const aluno = {
                nome: req.body.nome,
                ra: req.body.ra,
                serie: req.body.serie,
                sala: req.body.sala,
                chamada: req.body.chamada,
                nascimento: req.body.nascimento,
                laudo: req.body.laudo,
                entrada: req.body.entrada,
                saida: req.body.saida,
            }
            const response = await alunoModel.create(aluno)

            res.json({response, msg: "Serviço criado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req, res) => {
        try {
            const alunos = await alunoModel.find()
            res.json(alunos)
        }catch(error){
            console.log(error)
        }
    },
    get: async(req, res) => {
        try{
            const id = req.params.id
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ msg: 'ID fornecido não é válido' });
                return;
            }
            const alunoGet = await alunoModel.findById(id);
            if (!alunoGet) {
                res.status(404).json({msg:"aluno não encontrado"});
                return;
            }
            res.json(alunoGet)
        } catch(error) {
            console.log(error)
            res.status(500).json({msg:"Erro",error:error})
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ msg: 'ID fornecido não é válido' });
                return;
            }
            const alunoDelete = await alunoModel.findByIdAndDelete(id)
            if(!alunoDelete) {
                res.status(404).json({msg:"Aluno não encontrado"})
            }
            res.status(200).json({alunoDelete, msg:"Aluno excluido com sucesso"})
        } catch (error) {
            
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ msg: 'ID fornecido não é válido' });
                return;
            }
            const aluno = {
                nome: req.body.nome,
                ra: req.body.ra,
                serie: req.body.serie,
                sala: req.body.sala,
                chamada: req.body.chamada,
                nascimento: req.body.nascimento,
                laudo: req.body.laudo,
                entrada: req.body.entrada,
                saida: req.body.saida,
            }
            const updateAluno = await alunoModel.findByIdAndUpdate(id, aluno)

            res.status(200).json({aluno, msg: "Aluno Atualizado"})        
        } catch (error) {
            
        }
    }

}

module.exports = alunoController;