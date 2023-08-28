import { useState } from "react"
import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import '../../assets/css/restaurantes.css'
const RegistroRestaurante = () => {

  const [dataRestaurante, setDataRestaurante] = useState({})
  const [dataRestauranteShow, setDataRestauranteShow]= useState({})
  const [habilitar,setHabilitar]= useState(false)
  const [habilitarInformacion,setHabilitarInformacion]= useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm({})

  const registrarRestaurante = async (datos)=> {
    let nuevoRestaurante = datos
    const request = await fetch("http://localhost:1234/api/admin/registroRestaurante", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(nuevoRestaurante)
    })
    const data = await request.json()
    console.log(data);
    
    if(data.status == "success"){
      setDataRestaurante(data)
      setHabilitar(true)
    }
  }

  const obtenerDatos = async ()=>{
    let restauranteAlmacenado = JSON.stringify(dataRestaurante.restauranteAlmacenado)
    console.log(restauranteAlmacenado);
    const request = await fetch ("http://localhost:1234/api/admin/dataRestaurante/" + restauranteAlmacenado ,{
      method: "GET",
      headers: {
        "Content-type":"application/json",
        "Authorization": localStorage.getItem("token")
      },
      
    })
    const data = await request.json()
    setDataRestauranteShow(data)
    setHabilitarInformacion(true)
    console.log(data);

  }
  


  return (
    <>
    <Header/>
    <main className="registroResturante" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
    <section className="informacion-restaurante" style={{display: "flex", alignItems: "start", justifyContent: "center", gap: "1em", marginTop: "1em"}}>
      <form className="formulario-restaurante" onSubmit={handleSubmit(registrarRestaurante)}>
              <h3>Registro restaurantes</h3>
        <input className={`${errors.nombre ? 'error-message' :  ""}`} type="text" placeholder="Nombre del restaurante" name="" id="" {...register("nombre", {
          required: "El campo nombre de restaurante es obligatorio.",
          pattern: {
            value: /^[A-Za-z0-9 ]+$/,
            message: "El campo solo puede contener letras."
          }
        })} />
        <input type="text" className={`${errors.nit ? 'error-message' :  ""}`} placeholder="Nit" name="" id="" {...register("nit", {
        required: "El campo nit es obligatorio.",
        pattern: {
          value: /^[0-9]+$/,
          message: "El campo sólo puede contener números"
        }
        }  )} />
        <input type="text" className={`${errors.direccion ? 'error-message' :  ""}`} placeholder="Dirección" name="" id="" {...register("direccion",{
          required: "El campo dirección es obligatorio",
          pattern: {
            value: /^[a-zA-Z0-9#*-_.,\s]+$/,
            message: "La dirección contiene caracteres no válidos."
          }
        })} />
        <input type="text" className={`${errors.telefono ? 'error-message' :  ""}`} placeholder="Teléfono" name="" id="" {...register("telefono", {
          required: "El campo teléfono es obligatorio.",
          pattern: {
            value: /^[+]?[0-9]+$/,
            message: "El campo debe contener solo números y un signo + opcional al principio."
          },
          maxLength: 13
        })} />
        <input type="text" className={`${errors.identificacion ? 'error-message' :  ""}`} placeholder="Identificación" name="" id="" {...register("identificacion", {
          required: "El campo identificación es obligatorio",
          pattern: {
            value: /^[0-9]+$/,
            message: "El campo identificación sólo puede contener números"
          }
        })} />
        <input type="text" placeholder="UrlLogo" name="" id="" {...register("imagen")} />
        <button type="submit">Registrar restaurante</button>
      </form>
    </section>
    </main>
      {
        habilitar ? (<button onClick={obtenerDatos} style={{marginTop: "1em"}} >Ver información del restaurante</button>)
        : ""
      }
      {
        dataRestauranteShow && habilitarInformacion ? 
        
        <section className="informacion-restaurante" style={{display: "flex", alignItems: "start", justifyContent: "center", gap: "1em", marginTop: "1em"}}>
          <div className="visual-restaurante">
            <h2>Información restaurante</h2>
            <p>Nombre: {dataRestauranteShow.restaurante.nombre}</p>
            <p>Creación: {dataRestauranteShow.restaurante.creacion}</p>
            <img src={dataRestauranteShow.restaurante.imagen} alt="" />
          </div>
          <div className="visual-propietario">
            <h2>Información propietario</h2>
            <p>Nombre: {dataRestauranteShow.restaurante.propietarioId.nombre}</p>
            <p>Apellido: {dataRestauranteShow.restaurante.propietarioId.apellido}</p>
            <p>Teléfono: {dataRestauranteShow.restaurante.propietarioId.telefono}</p>
          </div>
        </section>
        :""
      }

    </>
  )
}

export default RegistroRestaurante