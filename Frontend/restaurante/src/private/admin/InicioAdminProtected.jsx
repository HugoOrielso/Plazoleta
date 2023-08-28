import { Link } from 'react-router-dom'
import '../../assets/css/registroPropietarios.css'
import imgPropietario from '../../assets/images/icons/propietario.jpg'
import imgRestaurante from '../../assets/images/icons/restaurante.jpg'
import imgInfoRestaurante from '../../assets/images/icons/infoRestaurante.jpg'
import imgActualizar from '../../assets/images/icons/actualizar.png'
import Header from '../../components/Header'


const InicioAdminProtected = () => {
  return (
    <>
        <Header/>
        <main className='vista-principal-admin' style={{background: "#e5e5e5", display: "flex", width: "100%", height: "30em", alignItems: "start", justifyContent: "center"}}>
            <section className='container-vista-principal'>
                <Link to='/registroPropietarios' className='input-router'>
                    <img src={imgPropietario} alt="Imágen propietario" />
                    <span>Registro propietario</span>
                </Link>
                <Link to='/registroRestaurante' className='input-router'>
                    <img src={imgRestaurante} alt="Imágen restaurante" className='img-restaurante' />
                    <span>Registro restaurante</span>
                </Link>
                <Link to='/actualizarUrlRestaurante' className='input-router'>
                    <img src={imgActualizar} alt="Imágen restaurante" className='img-restaurante' />
                    <span>Actualizar url restaurante</span>
                </Link>
                <Link to='/verInfoRestaurante' className='input-router'>
                    <img src={imgInfoRestaurante} alt="Imágen restaurante" className='img-restaurante' />
                    <span>Ver información de restaurante</span>
                </Link>
            </section>
        </main>
    </>
  )
}

export default InicioAdminProtected