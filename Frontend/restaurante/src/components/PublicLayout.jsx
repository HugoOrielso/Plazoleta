import React from 'react'
import UseAuth from '../hooks/UseAuth'
import { Navigate, Outlet } from 'react-router-dom'
import '../assets/css/mensaje.css'

export const PublicLayout = () => {
    const {auth}= UseAuth()
  return (

    <>
    {!auth._id ? 
        <Outlet />
        :
        <Navigate to="/social" />
    }
    </>
  )
}
