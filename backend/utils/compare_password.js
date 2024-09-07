
const bcrypt = require("bcryptjs")

const compare_password = async (new_pass, old_pass)=>{
   try {
     return bcrypt.compare(new_pass, old_pass)
   } catch (error) {
    console.log(error.message)
   }
}