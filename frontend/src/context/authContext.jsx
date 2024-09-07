import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)
const AuthContextProvider= ({children}) => {
    const [ loginValues, setLoginValues ] = useState({
        email: "",
        password:""
    })

    const [ signupValues, setSignupValues ] = useState({
        username: "", 
        password: "",
        contact: "",
        email:""
    })


    const getLoginValues = (e) => {
        setLoginValues(prevValues => ({ 
            ...prevValues, 
            [e.target.name]: e.target.value 
        }));
        console.log(loginValues);
    };

    const getSignupValues = (e) => {
        setSignupValues(prevValues => ({ 
            ...prevValues, 
            [e.target.name]: e.target.value 
        }));
        console.log(signupValues);
    };

  return (
      <AuthContext.Provider value={{getLoginValues, loginValues, getSignupValues, signupValues}}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
