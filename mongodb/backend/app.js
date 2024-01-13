const express = require("express")
const cors = require("cors")
const app = express()
const routes = require("./routes/router")

app.use(cors())

app.use(express.json())

//DB Connection
const conn = require("./db/conn")

conn();

app.use("/api", routes)

app.listen(3000, ()=>{
    console.log("No ar...")
})