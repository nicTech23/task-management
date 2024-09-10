const jwt = require("jsonwebtoken")

exports.decodeToken = (token)=>{
   try {
       const decode = jwt.verify(token, process.env.JWT_SECRET)
       return decode
   } catch (error) {
    console.log(error.message)
   }
}