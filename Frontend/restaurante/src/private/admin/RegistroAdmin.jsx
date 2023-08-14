import { useForm } from "react-hook-form"
import '../../assets/css/mensaje.css'

const RegistroAdmin = () => {
    const {register,handleSubmit} = useForm({})

    const registerAdmin = async (datos)=>{
        console.log(datos);
        let adminRegister = datos
        const request = await fetch("http://localhost:1234/api/admin/registro",{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(adminRegister)
        })
        const data = await request.json()
        console.log(data);
    }

  return (
    <>
    
    <form action="" onSubmit={handleSubmit(registerAdmin)}>
        <input type="text" placeholder="Nombre" {...register("nombre")} />
        <input type="text" placeholder="Correo electrónico" {...register("email")} />
        <input type="password" placeholder="Contraseña" {...register("password")} />
        <button type="submit">Registrar</button>
    </form>
    
    </>
  )
}

export default RegistroAdmin