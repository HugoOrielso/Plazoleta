const mongoose = require('mongoose')
const textToConnection = "mongodb://127.0.0.1:27017/restaurate"

mongoose.set('strictQuery', false);
module.exports = ()=>{
    const conection = async ()=>{
        try {
            await mongoose.connect(
                textToConnection,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
                )
                console.log("Conectado a la base de datos: restaurante");
        } catch (error) {
            console.error(error);
            throw new Error("No se ha podido conectar a la base de datos")
        }
    }
    conection()
}