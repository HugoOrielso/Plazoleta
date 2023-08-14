const {Schema, model} = require('mongoose')

const PropietarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        default: "Propietario"
    }
})

module.exports = model('Propietario', PropietarioSchema, 'Propietarios')