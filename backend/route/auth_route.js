const { Router } = require("express");
const { register, login } = require("../controller/auth_controller");

const auth_router = Router()


auth_router.post("/register", register)
auth_router.post("/login", login)





module.exports = auth_router;