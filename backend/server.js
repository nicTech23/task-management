const express = require("express")
const dotenv = require("dotenv")
const auth_router = require("./route/auth_route")
const { dbConnect } = require("./config/dbConnect")
const task_router = require("./route/task_route")
const { checkTasks } = require("./utils/check_task")
const cron = require('node-cron');
const cors = require('cors');
const cookieParser = require('cookie-parser');





const app = express()
dotenv.config()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,  // Enable credentials
}));
app.use(express.json())
// Use cookie-parser middleware
app.use(cookieParser());
app.use("/api/v1/auth", auth_router)
app.use("/api/v1/task", task_router)

// const corsOptions = {
//   origin: ['http://example1.com', 'http://example2.com'], // Allow multiple origins
//   methods: 'GET,POST,PUT,DELETE', // Allow specific HTTP methods
//   allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
//   credentials: true, // Allow credentials (cookies, HTTP authentication)
//   optionsSuccessStatus: 200, // Some legacy browsers choke on 204
// };

// app.use(cors(corsOptions));


const port = process.env.PORT || 2000

cron.schedule('* * * * *', checkTasks);


app.listen(port, ()=>{
    dbConnect() 
    console.log("I am listening on ", port)
})