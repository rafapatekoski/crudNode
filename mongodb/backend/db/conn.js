const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect("mongodb+srv://patekoski:patekoski@aprendendo.jvltr8a.mongodb.net/")
        console.log("Conectado ao banco...")
    } catch(error) {
        console.log("error: "+error)
    }
}

module.exports = main