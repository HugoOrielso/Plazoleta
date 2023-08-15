const jwt = require('jwt-simple')
const moment = require('moment')

const libjwt = require('../services/jwt')
const secret =  libjwt.secret


exports.auth = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(403).send({
            status: "error",
            message: "La petición no tiene la cabecera de autorización "
        })
    }

    let token = req.headers.authorization.replace(/['"]+/g,'')
    try {
        let payload = jwt.decode(token,secret)
        console.log(payload.exp);
        // comprobar expiración del token
        if(payload.ex <= moment().unix()){
            return res.status(401).send({
                status: "error",
                message: "Token expirado"
            })
        }
        req.user = payload  

    } catch (error) {
        return res.status(404).send({
            status: "error",
            message: "Token inválido"
        })
    }


    next()
}

