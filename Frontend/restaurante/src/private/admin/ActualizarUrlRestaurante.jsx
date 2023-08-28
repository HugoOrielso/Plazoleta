import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import '../../assets/css/restaurantes.css'

const ActualizarUrlRestaurante = () => {

    const {register,handleSubmit} = useForm({})

    const actualizarUrlRestaurante = async (data)=>{

        const fileInput = document.querySelector("#file")
        console.log(data.nit);
        if(fileInput.files[0]){
            const formData = new FormData()
            formData.append('file0',fileInput.files[0])
            console.log(formData);
            const request = await fetch ("http://localhost:1234/api/admin/uploads/" + data.nit, {
                method: "POST",
                body: formData,

            })


            const datos = await request.json()
            console.log(datos);
        }
    }


    const verInfo = async()=>{}

  return (
    <>
    <Header/>
    <main className='actualizacion-restaurante ' style={{background: "#e5e5e5", display: "flex", width: "100%", height: "30em", alignItems: "start", justifyContent: "center"}}>
    <section className="informacion-restaurante" style={{display: "flex", alignItems: "start", justifyContent: "center", gap: "1em", marginTop: "1em"}}>

        <form action="" className='formulario-restaurante' onSubmit={handleSubmit(actualizarUrlRestaurante)}>
            <h3>Actualizar imágen de restaurante</h3>
            <input type="text" placeholder='Nit restaurante' {...register("nit")} />
            <input type="text" placeholder='Imágen url' {...register("urlImagen")} />
            <input type="file" name="file0" id="file" {...register("file0")} />
            <button type='submit'>Actualizar</button>
        </form>
    </section>

    <button onClick={verInfo}>Ver info</button>
    </main>

    </>
  )
}

export default ActualizarUrlRestaurante