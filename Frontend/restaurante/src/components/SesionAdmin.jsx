import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../assets/css/admin.css'
import {  useNavigate } from 'react-router-dom'
import Header from './Header'
import { useLocalStorage } from 'react-use'

const SesionAdmin = () => {
    const navegarA = useNavigate()
    const [admin, setAdmin]=  useLocalStorage('admin')

    const { register, handleSubmit, formState: { errors } } = useForm();
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
            setAdmin(data.admin)
            setSaved("login")
            
              
              setTimeout(()=>{
                navegarA("/vistaPrincipalAdmin")
              },2000)
            
          }else{
            setSaved("error")
          }
    }
  return (
    <>

    <Header/>

    {saved=="login" ? <strong className="alert alert-success"> Administrador identificado correctamente </strong>: ""}
    {saved=="error" ? <strong className="alert alert-danger"> Administrador no identificado </strong>: ""}
    <section className='container-form'>
        <form onSubmit={handleSubmit(loginAdmin)} className='formularioAdmin'>
          <h3>Inicio de sesión administradores</h3>
          <div>

            <input type="text" className={`${errors.email ? 'error-message' : ""}`} placeholder='Correo electrónico' name='email' {...register("email",{ required: "El campo email es requerido.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Formato de correo electrónico inválido.'
              }
            })}
            
            />
          </div>
            <div>
              <input type="password" className={`${errors.password ? 'error-message' : ""}`} placeholder='Contraseña' name='contraseña' {...register("password", { required: "El campo contraseña es requerido."})}/>
            </div>
              <button type='submit'>Iniciar sesión</button>
        </form>
    </section>
    </>
  )
}

export default SesionAdmin