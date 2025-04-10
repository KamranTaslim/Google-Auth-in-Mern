import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from './api'
import {useNavigate} from 'react-router-dom';

export const GoogleLogin = () => {

  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
  try {//Yes, authResult is obtained from the GoogleOAuthProvider when the user successfully logs in using the Google OAuth flow. It provides the authentication response, including tokens and user information.
         if(authResult['code']){
          const result = await googleAuth(authResult['code']);
          console.log(result.data);
          const {email,name,image} = result.data.user; 
          const token = result.data.token; 
          const obj = {email,name,image,token};
          navigate("/dashboard"); // Redirect to dashboard after successful login
          localStorage.setItem('user-Info', JSON.stringify(obj)); // Store user data in local storage
          
          console.log(result.data.user);

         }
         console.log(authResult);
             
  } catch (error) {
    console.error('Error during Google login:', error); 
  }
  }


  const googleLogin = useGoogleLogin({
    onSuccess:responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code',
  })
    
  return (
    <div className='app'>
      <button onClick={googleLogin}>Login With Google</button>
    </div>
  )
}
