import React from 'react'
import { useNavigate } from 'react-router-dom'
export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
    <h1>404 PageNotFound</h1>
    <button onClick={()=>navigate("/login") }>login</button>
    </> 
  )
}
