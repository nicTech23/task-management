const express = require("express")
const dotenv = require("dotenv")
const auth_router = require("./route/auth_route")
const { dbConnect } = require("./config/dbConnect")
const task_router = require("./route/task_route")
const { checkTasks } = require("./utils/check_task")
const cron = require('node-cron');


const app = express()
dotenv.config()

app.use(express.json())
app.use("/api/v1/auth", auth_router)
app.use("/api/v1/task", task_router)


const port = process.env.PORT || 2000

cron.schedule('* * * * *', checkTasks);


app.listen(port, ()=>{
    dbConnect() 
    console.log("I am listening on ", port)
})