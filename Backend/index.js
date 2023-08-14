const express = require('express')
const conectionDB = require('./database/connection')
const cors = require('cors')
const app = express()
const chek = require('./middlewares/autorizacion')
const PORT = process.env.PORT ?? 1234

conectionDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const adminController = require('./controllers/admin.js')

app.post("/api/admin/registro", adminController.registro )
app.post("/api/admin/sendCode/:code", adminController.sendMessage)
app.post("/api/admin/login", adminController.login)
app.post("/api/admin/registrarPropietario", chek.auth ,adminController.registrarPropietario)
app.get("/api/prueba-usuario", chek.auth, (req,res)=>{
    return res.json({
        status: "success",
        message: "Todo bien",
        usuario: req.user
    })
})
app.listen(PORT,(req,res)=>{
    console.log("server on port, " + PORT + " http://localhost:5173");
})
