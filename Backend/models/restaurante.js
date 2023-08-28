const {Schema, model} = require('mongoose')

const RestauranteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    nit: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    identificacion:{
        type: Number,
        required: true
    },
    propietarioId: {
        type: Schema.ObjectId,
        ref: "Propietario",
    },
    imagen: {
        type: String,
        default: "default.png"
    },
    creacion: {
        type: Date,
        default: Date.now
    }
})

module.exports=model('Restaurante' , RestauranteSchema,"Restaurantes")