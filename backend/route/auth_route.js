const { Router } = require("express");
const { register, login } = require("../controller/auth_controller");
const { registerValidation, loginValidation } = require("../utils/validation");

const auth_router = Router()


auth_router.post("/register", registerValidation, register)
auth_router.post("/login",loginValidation, login)





module.exports = auth_router;