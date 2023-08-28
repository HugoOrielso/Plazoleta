const express = require('express')
const bodyParser = require('body-parser');
const conectionDB = require('./database/connection')
const cors = require('cors')
const multer = require('multer')
const app = express()
const chek = require('./middlewares/autorizacion')
const PORT = process.env.PORT ?? 1234

conectionDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

 
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./uploads/restauranteAvatars/")
    },
    filename: (req, file, cb)=>{
        cb(null, "avatar-"+Date.now()+"-"+file.originalname)
    },

})

const uploads = multer({storage, limits: {
    fieldSize: 5 * 1024 * 1024
}})

const adminController = require('./controllers/admin.js')

app.post("/api/admin/registro", adminController.registro )
app.post("/api/admin/sendCode/:code", adminController.sendMessage)
app.post("/api/admin/login", adminController.login)
app.post("/api/admin/registrarPropietario", chek.auth ,adminController.registrarPropietario)
app.post("/api/admin/registroRestaurante", chek.auth , adminController.registroRestaurante)
app.get("/api/admin/dataRestaurante/:restaurante",  adminController.infomacionRestaurante)
app.post("/api/admin/uploads/:nit", uploads.single("file0") , adminController.uploads)

app.listen(PORT,(req,res)=>{
    console.log("server on port, " + PORT + " http://localhost:5173");
})
