import { NavLink } from 'react-router-dom'
import '../assets/css/nav.css'
const Nav = () => {
  return (
    <nav>
        <ul>

            <li>
                <NavLink to="/" className="router-li" >Inicio </NavLink>
            </li>

            <li>
                <NavLink to="/adminInicio" className="router-li" >
                    Admin 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="caret-derecha" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                    <ul className='submenu'>
                        <NavLink to="/adminInicio" className='submenu-item'>
                            Iniciar sesión
                        </NavLink>
                        <NavLink to="/vistaPrincipalAdmin" className='submenu-item'>
                            Inicio administración
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="person-lock" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                            </svg>
                        </NavLink>

                        <NavLink to="/registroPropietarios" className='submenu-item'>
                            Registro propietarios  
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="person-lock" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                            </svg>
                        </NavLink>
                        <NavLink to="/registroRestaurante" className='submenu-item'>
                            Registro restaurantes
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="person-lock" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                            </svg>
                        </NavLink>
                        <NavLink to="/verInfoRestaurante" className='submenu-item'>
                            Información restaurantes
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="person-lock" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                            </svg>
                        </NavLink>
                    </ul>
                </NavLink>
            </li>

            <li>
                <NavLink to="/propietario" className="router-li" >Propietario</NavLink>
            </li>
            <li>
                <NavLink to="/empleado" className="router-li" >Empleado</NavLink>
            </li>

            <li>
                <NavLink to="/cliente" className="router-li" >Cliente</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav