import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../assets/css/admin.css'
import {  useNavigate } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'

const SesionAdmin = () => {
    const navegarA = useNavigate()
    const {register, handleSubmit} = useForm({})
    const [ saved, setSaved ] = useState("not_sended")
    const loginAdmin = async (datos)=>{
        let user = datos
        const request = await fetch("http://localhost:1234/api/admin/login",{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await request.json()
        console.log(data);
        if(data.status == "success"){
            localStorage.setItem("token", data.token)
            localStorage.setItem("admin",JSON.stringify(data.admin) )
            setSaved("login")
            navegarA("/registroPropietarios")
          }else{
            setSaved("error")
          }
    }
  return (
    <>

    <Header/>
    <Nav/>

    {saved=="login" ? <strong className="alert alert-success"> Administrador identificado correctamente </strong>: ""}
    {saved=="error" ? <strong className="alert alert-danger"> Administrador no identificado </strong>: ""}
    <section className='container-form'>
        <form onSubmit={handleSubmit(loginAdmin)} className='formularioAdmin'>
          <h3>Inicio de sesión administradores</h3>
            <input type="text" placeholder='Correo electrónico' name='email' {...register("email")}/>
            <input type="text" placeholder='Contraseña' name='contraseña' {...register("password")}/>
            <button type='submit'>Iniciar sesión</button>
        </form>
    </section>
    </>
  )
}

export default SesionAdmin