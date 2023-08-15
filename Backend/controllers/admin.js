const Admin = require('../models/admin')
const Propietario = require('../models/propietarios')
const bcrypt = require('bcrypt')
const jwt = require('../services/jwt.js')
const registro = async (req,res) => {
    let params = req.body
    if(!params.email || !params.password || !params.nombre){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }
    let pwd= await bcrypt.hash(params.password,10 )
    params.password = pwd
    let adminToSave = new Admin(params)
    try {
        const userRepit = await Admin.findOne({ email:adminToSave.email }).exec()
        if(userRepit){
            return res.status(409).json({
                status: "error",
                message: "El administrador ya exite en la base de datos."
            })
        }
        const adminStored = await adminToSave.save()
        if(!adminStored){
            return res.status(400).json({
                status: "error",
                message: "Error al guardar el usuario"               
            })
        }
        return res.status(201).json({
            status: "success",
            message: "Administrador almacenado correctamente",
            administrador: adminStored
        })
    } catch (error) {
        console.log(error);
    }
}


const registrarPropietario = async (req, res) => {
    try {
        let user = req.user;
        let propietario = req.body;
        
        console.log(user.rol);
        console.log("Propietario:", propietario);
        
        if (!user.rol || user.rol !== "Administrador") {
            res.redirect('/')
            return res.status(400).json({
                status: "error",
                message: "No estás autorizado para realizar esta acción."
            });
            
        }
        
        let pwd = await bcrypt.hash(propietario.password, 10);
        propietario.password = pwd;
        let nuevoPropietario = new Propietario(propietario);
        
        let propietarioRepetido = await Propietario.findOne({
            email: propietario.email,
            identificacion: propietario.identificacion
        }).exec();
        
        if (propietarioRepetido) {
            return res.status(400).json({
                status: "error",
                message: "El propietario existe en la base de datos y no se puede registrar nuevamente."
            });
        }
        
        const propietarioAlmacenado = await nuevoPropietario.save();
        
        if (!propietarioAlmacenado) {
            return res.status(400).json({
                status: "error",
                message: "Ocurrió un error al almacenar el propietario"
            });
        } else {
            return res.status(200).json({
                status: "success",
                message: "Propietario almacenado"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Ocurrió un error en el servidor"
        });
    }
};


const sendMessage = async (req,res)=>{
    let code = req.params.code
    let phoneNumber = req.body.phoneNumber
    console.log(code, phoneNumber)
    console.log(code)
    if(!code){
        res.status(401).json({
            status: "error",
            message: "Faltan datos por enviar."
        })
    }else{

                         //   Llamado api comentar si es necesario!!!!!!!!!!!!!!!!!!!!!!!!!
        // const accountSid = "AC2ef70e9146b3677c3d3747d4f063682e"
        // const authToken = "49ed98d234d9aaabe65b4578ce824060"
        // const client = require('twilio')(accountSid, authToken)
        // try {
            // client.messages.create({
                // body: `Administrador restaurante FESC, tu código de verificación es: ${code}`,
                // from: "+15736746198",
                // to: phoneNumber
            // }).then(message=> console.log(message.sid))
            // res.status(200).json({
                // status: "success",
                // codigoVerificacion: code,
            // })
        // } catch (error) {
            // console.log(error);
        // }

    }
    res.status(200).json({
        status: "success",
        codigoVerificacion: code,
    })
}


const login = async (req,res)=>{
    let params = req.body
    if (!params.email || !params.password) {
        return res.status(400).json({
            status: "success",
            message: "Faltan datos por enviar"
        })
    
    }

    let user = await Admin.findOne({email: params.email}).exec()
    if(!user){ 
        return res.status(404).json({
            status: "error",
            message: "El usuario no existe en la base de datos."
        })
    }
    let pwd = bcrypt.compareSync(params.password, user.password)
    if(!pwd){
        return res.status(400).json({
            status: "error",
            message: "No te has identificado correctamente"
        })
    }
    const token = jwt.crearToken(user)
    console.log(token);
    return res.status(200).json({
        status: "success",
        message: "Acción de login",
        admin: {
            id: user._id,
            nombre: user.nombre,
            rol: user.rol
        },
        token: token
    })
}






module.exports = {
    registro,
    sendMessage,
    login,
    registrarPropietario
}