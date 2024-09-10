const jwt = require("jsonwebtoken")
const { decodeToken } = require("../utils/decode_token")
exports.getToken =async (req, res, next)=>{
    try {
        const { token } = req.cookies
        if (!token) throw new Error("Unauthorize user")
        const decode = decodeToken(token)
        const {userId} = decode
        if (!userId) throw new Errow("Invalid token")
        req.user = userId
        console.log("my ", userId) 
        next() 
    } catch (error) {
        res.status(504).json({error: error.message})
    }
}