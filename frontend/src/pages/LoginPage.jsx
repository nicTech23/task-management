import React from 'react'
import Login from '../component/Login'
import AuthContextProvider from '../context/authContext'

const LoginPage = () => {
  return (
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>
  )
}

export default LoginPage
