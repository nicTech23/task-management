import { jwtDecode } from 'jwt-decode'; 


const decodeToken = (token)=>{
    const decoded = jwtDecode(token); 
   
    return decoded
}

export default decodeToken;