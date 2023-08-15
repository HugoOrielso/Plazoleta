import {  BrowserRouter, Routes, Route} from "react-router-dom"
import AdminInicio from "../components/AdminInicio"
import SesionAdmin from "../components/SesionAdmin"
import RegistroAdmin from "../private/admin/RegistroAdmin"
import RegistroPropietario from "../private/admin/RegistroPropietario"
import Inicio from "../components/Inicio"
import InicioCliente from "../private/client/InicioCliente"
import InicioPropietario from "../private/propietario/InicioPropietario"
import InicioEmpleado from "../private/empleado/InicioEmpleado"
import ProtectedRouteAdmin from "../utils/AdminProtectedRoutes"
import { useLocalStorage } from 'react-use'
const Routing = () => {
  const [admin] = useLocalStorage('admin')
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/adminInicio"  element={<AdminInicio/>} />
            <Route path="/iniciarSesionAdmin" element={<SesionAdmin/>}/>
            <Route element={<ProtectedRouteAdmin activate={admin && admin.rol.includes('Administrador')} />} >
              <Route path="/registroPropietarios" element={<RegistroPropietario  />}/>
              <Route path="/registroAdmin" element={<RegistroAdmin  />}/>
            </Route> 
            <Route path="propietario" element={<InicioPropietario/>} />
            <Route path="empleado" element={<InicioEmpleado/>} />
            <Route path="cliente" element={<InicioCliente/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default Routing