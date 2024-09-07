const jwt = require("jsonwebtoken")

exports.generate_token = async(payload)=>{
     // Generate JWT
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}