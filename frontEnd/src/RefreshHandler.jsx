import React, { use, useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export const RefreshHandler = ({setIsAuthenticated}) => {
    const naviagte = useNavigate();
    const location = useLocation();

    useEffect(() => {
         const data = localStorage.getItem('user-Info');
         const token = JSON.parse(data)?.token;
         if (token) {
            setIsAuthenticated(true);
            if(location.pathname === '/'|| location.pathname === '/login'){
               naviagte('/dashboard', {replace: false})
            }
        }
    },[naviagte,location,setIsAuthenticated])
  return null
}
