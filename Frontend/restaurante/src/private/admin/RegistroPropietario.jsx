import { useForm } from 'react-hook-form'
import '../../assets/css/registroPropietarios.css'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import useAuthAdmin from '../../hooks/useAuthAdmin'

const RegistroPropietario = () => {
    const {register, handleSubmit} = useForm({})
    const registrarOwner=async(datos)=>{
        const dataPropietario = datos

        const request = await fetch("http://localhost:1234/api/admin/registrarPropietario",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body : JSON.stringify(dataPropietario)
        })
        const data = await request.json()
        console.log(data);
    }

  return (
    <>   

        <Header/>
        <Nav/>
        <section className='container-formulario-propietarios'>
        <form onSubmit={handleSubmit(registrarOwner)} className='formulario-propietarios'>
            <h3>Registrar propietario</h3>
            <input type="text" placeholder='nombre' {...register("nombre")} />
            <input type="text" placeholder='apellido' {...register("apellido")} />
            <input type="text" placeholder='email' {...register("email")} />
            <input type="number" placeholder='identificación' {...register("identificacion")} />
            <input type="number" placeholder='teléfono' {...register("telefono")} />
            <input type="password" placeholder='contraseña' {...register("password")} />
            <button type='submit'>Registrar propietario</button>
        </form>
        </section>
    </>
  )
}

export default RegistroPropietario