import { NavLink } from 'react-router-dom'
import '../assets/css/nav.css'
const Nav = () => {
  return (
    <nav>
        <ul>

            <li>
                <NavLink to="/" className="router-li" >Inicio</NavLink>
            </li>

            <li>
                <NavLink to="/adminInicio" className="router-li" >Admin</NavLink>
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