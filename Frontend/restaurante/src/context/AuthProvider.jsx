import React, { createContext, useState, useEffect } from 'react'


const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [auth , setAuth ] = useState({})

    useEffect(()=>{
        authUser()
    },[])

    const authUser = async()=>{
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")

        if(!token || !user){
            return false
        }

        const userObj = JSON.parse(user)
        const userId = userObj.id



    }
  return (<AuthContext.Provider
    value={{
        auth,
        setAuth
    }}

            >
    {children}
  </AuthContext.Provider>)
}


export default AuthContext