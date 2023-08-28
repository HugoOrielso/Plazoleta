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
import InicioAdminProtected from "../private/admin/InicioAdminProtected"
import RegistroRestaurante from "../private/admin/RegistroRestaurante"
import ActualizarUrlRestaurante from "../private/admin/ActualizarUrlRestaurante"
import VerInfoRestaurante from "../private/admin/VerInfoRestaurante"
const Routing = () => {
  const [admin] = useLocalStorage('admin')
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/adminInicio"  element={<AdminInicio/>} />
            <Route path="/iniciarSesionAdmin" element={<SesionAdmin/>}/>
            <Route element={<ProtectedRouteAdmin activate={admin && admin.rol.includes('Administrador')} />} >
              <Route path="vistaPrincipalAdmin" element={<InicioAdminProtected/>} />
              <Route path="/registroPropietarios" element={<RegistroPropietario  />}/>
              <Route path="/registroAdmin" element={<RegistroAdmin  />}/>
              <Route path="/registroRestaurante" element={<RegistroRestaurante/>} />
              <Route path="/actualizarUrlRestaurante" element={<ActualizarUrlRestaurante/>} />
              <Route path="/verInfoRestaurante" element={<VerInfoRestaurante/>} />
            </Route> 
            <Route path="propietario" element={<InicioPropietario/>} />
            <Route path="empleado" element={<InicioEmpleado/>} />
            <Route path="cliente" element={<InicioCliente/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default Routing