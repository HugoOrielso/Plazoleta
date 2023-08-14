import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouteAdmin = ({
    activate, redirectPath = '/'
})=>{

    console.log(activate)
    if(!activate){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet/>
}

export default ProtectedRouteAdmin