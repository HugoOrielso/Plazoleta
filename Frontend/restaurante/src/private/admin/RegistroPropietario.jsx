import { useForm } from 'react-hook-form'
import Header from '../../components/Header'
import '../../assets/css/registroPropietarios.css'

const RegistroPropietario = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({})
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
        <section className='container-formulario-propietarios'>
        <form onSubmit={handleSubmit(registrarOwner)} className='formulario-propietarios'>
            <h3>Registrar propietario</h3>
            <label htmlFor='nombre'>
                <input type="text" className={ `${errors.nombre ? 'error-message' : ""}`} id='nombre' placeholder='Nombre' {...register("nombre",
                {
                    required: "El campo nombre es requerido.",
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'El campo nombre solo puede contener letras.'
                    }
                }
                )} />
            </label>
            <label htmlFor='apellido'>
                <input type="text" id='apellido' className={`${errors.apellido ? 'error-message' : ""}`} placeholder='Apellido' {...register("apellido",
                {
                    required: "El campo apellido es requerido",
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "El campo solo puede contener letras."
                    }
                }
                )} />
            </label>
            <label htmlFor='email'>    
                <input type="text" className={`${errors.email ? 'error-message' : ""}`} id='email' placeholder='Email' {...register("email",
                {
                    required: "El campo email es requerido.",
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        
                        message: "Formato de correo electrónico inválida"
                    }
                }
                )} />
            </label>
            <label htmlFor="identificación">
                <input type="text" className={`${errors.identificacion ? 'error-message ' : ""}`} placeholder='Identificación' id='identificación' {...register("identificacion",
                {
                    required: "El campo identificación es requerido.",
                    pattern:{
                        value: /^[0-9+]+$/,
                        message: "El campo identificación sólo recibe números."
                    },
                    maxLength:{
                        value: 10,
                        message: "El campo identificación sólo puede tener como máximo 10 caracteres."
                    }
                }
                )} />
            </label>
            <label htmlFor="teléfono">
                <input type="text" className={`${errors.telefono ? 'error-message' : ""}`} id='teléfono' placeholder='Teléfono' {...register("telefono",
                {
                    required: "El campo teléfono es requerido",
                    pattern:{
                        value: /^[0-9+]+$/,
                        message: "El campo teléfono sólo recibe números."
                    },

                    minLength: {
                        value: 10,
                        message:  "El campo teléfono debe tener mínimo 10 caracteres."
                    },
                    maxLength:{
                        value: 13,
                        message: "El campo teléfono sólo puede tener como máximo 13 caracteres."
                    },
                }
                )} />
            </label>
            <label htmlFor="contraseña">
                <input type="password" id='contraseña' className={`${errors.password ? 'error-message' : ""}`} placeholder='Contraseña' {...register("password",
                {
                    required: "El campo contraseña es requerido.",
                    minLength: {
                        value: 8,
                        message: "El campo contraseña mínimo debe tener 8 caracteres"
                    }
                }
                )} />
            </label>
            <button type='submit'>Registrar propietario</button>
        </form>
        </section>
    </>
  )
}

export default RegistroPropietario