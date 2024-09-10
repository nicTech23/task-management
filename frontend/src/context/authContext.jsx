import React, { createContext, useState } from 'react'
import axios from "axios"
import Cookies from 'js-cookie';

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

    const [authError, setAuthError] = useState(null)

    const setCookie = (token) => {
        Cookies.set('token', token, { expires: 7 }); // expires: 7 means the cookie will expire in 7 days
    };

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

    const LoginSubmit = async(navigate)=>{
        try {
            if (Object.values(loginValues).length > 1) {
                const response = await axios.post("http://localhost:3054/api/v1/auth/login", {email:loginValues.email, password:loginValues.password}, {withCredentials:true})
                const data = await response?.data?.token
                
                setCookie(data)

                setLoginValues({
                    email: "",
                    password:""
                })

               await  navigate("/dashboard") 
            } else {
                 setAuthError("All fields require")

                    const interval = setInterval(() => {
                        setAuthError(null)

                        // Clear the interval once the message is deleted
                        clearInterval(interval);
                    }, 10000);
            }
            
        } catch (error) {
             console.log()
            setAuthError(error?.response?.data?.errors?.msg || error?.response?.data?.message || error.message)
             const interval = setInterval(() => {
                    setAuthError(null)

                    // Clear the interval once the message is deleted
                    clearInterval(interval);
            }, 10000);
        }
    }
    const SignupSubmit = async(navigate)=>{
        
        try {
            if (Object.values(signupValues).length > 3) {
                console.log("man")
                const response = await axios.post("http://localhost:3054/api/v1/auth/register", signupValues)
                const data = await response?.data
                console.log(data)
            
                setSignupValues({
                    username: "", 
                    password: "",
                    contact: "",
                    email:""
                })
                console.log("hello")
                navigate("/login")
            } else {
                setAuthError("All fields require")

                const interval = setInterval(() => {
                    setAuthError(null)

                    // Clear the interval once the message is deleted
                    clearInterval(interval);
                }, 10000);
            }
            
        } catch (error) {
            console.log(error)
             setAuthError(error?.response?.data?.errors?.msg || error?.response?.data?.message || error.message)
             const interval = setInterval(() => {
                    setAuthError(null)

                    // Clear the interval once the message is deleted
                    clearInterval(interval);
            }, 10000);
        }
    }

  return (
      <AuthContext.Provider value={{
          getLoginValues,
          loginValues,
          getSignupValues,
          signupValues,
          LoginSubmit,
          SignupSubmit,
          authError
      }}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
