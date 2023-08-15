import { Navigate, Outlet } from "react-router-dom"
import { useLocalStorage } from 'react-use'

const ProtectedRouteAdmin = ({
    activate, redirectPath = '/'
})=>{
  const [admin, setAdmin]=  useLocalStorage('admin')


    console.log(activate)
    if(!activate){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet/>
}

export default ProtectedRouteAdmin