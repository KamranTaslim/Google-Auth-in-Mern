import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const[userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user-Info');
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }
  ,[])

  const handleLogout = () => {
    localStorage.removeItem('user-Info');
    navigate("/login")
  }

  return (
    <>
  
  <h1>Welcome {userInfo?.name}</h1>
  <h3>Email{userInfo?.email}</h3>
  <img src={userInfo?.image} alt={userInfo?.email} />
  <button onClick={handleLogout}>Log Out</button>
  </>
  )
}
