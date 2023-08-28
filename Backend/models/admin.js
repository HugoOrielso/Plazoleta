const {Schema, model}= require('mongoose')


const AdminSchema = Schema({
    nombre : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true 
    },
    rol: {
        type: String,
        default: "Administrador"
    }
})

module.exports = model('Admin',AdminSchema,"Administradores");