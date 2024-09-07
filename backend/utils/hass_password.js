const bcrypt = require("bcryptjs")

exports.hashhass_password = (password)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedpassword = bcrypt.hashSync(password)
        return hashedpassword
    } catch (error) {
        console.log(error.message)
    }

}