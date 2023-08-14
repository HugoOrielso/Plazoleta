const jwt = require('jwt-simple')
const moment = require('moment')


const secret = "ClavE_sEcReta_del_PROYECTO_RESTAURANTe_987987"

const crearToken = (user)=>{
    const payload = {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }
    return jwt.encode(payload,secret)
}
module.exports = {
    crearToken,
    secret
}