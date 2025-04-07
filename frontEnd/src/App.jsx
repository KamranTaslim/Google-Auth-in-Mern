
import './App.css'
import {BrowserRouter, Router, Route, Routes,Navigate} from 'react-router-dom'
import { GoogleLogin } from './GoogleLogin'
import { Dashboard } from './Dashboard'
import { PageNotFound } from './PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import { RefreshHandler } from './RefreshHandler'

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);

const GoogleAuthWrapper = ()=>{
  return(
    <GoogleOAuthProvider clientId='54833808169-aloufd4kottb55uga6udl9h4bsmc040g.apps.googleusercontent.com'>
      <GoogleLogin/>
    </GoogleOAuthProvider>
  )
}
//if any person try to access dashboard without login then redirect him to login page
const PrivateRoute = ({element}) => {
  return isAuthenticated ? element : <Navigate to="/login" />
}
  return (
    <BrowserRouter>
    //RefreshHandler is used to check if the user is authenticated or not
    <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper/>} />
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>}/>} />
        {/* if some body hit different url  */}
        <Route path="*" element={<PageNotFound/>} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App
