import React from 'react'
import AuthContextProvider from '../context/authContext'
import Signup from '../component/SignUp'

const SignUpPage = () => {
    
  return (
    <AuthContextProvider>
      <Signup/>
    </AuthContextProvider>
  )
}

export default SignUpPage
