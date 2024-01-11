const express = require("express")
const app = express()
const bodyParser = require("body-parser")

//View engine
app.set('view engine', 'ejs')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
//static
app.use(express.static('public'))

//rotas
app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(3000, ()=>{
    console.log("O servidor está no ar")
})