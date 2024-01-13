const router = require("express").Router()

//aluno router
const alunoRouter = require("./aluno")

router.use("/",alunoRouter)

module.exports = router