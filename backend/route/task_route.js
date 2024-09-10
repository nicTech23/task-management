const { Router } = require("express")
const { create_task, update_task, delete_task, all_tasks } = require("../controller/task_controller")
const { getToken } = require("../middleware/getToken")
const { createTaskValidation } = require("../utils/validation")

const task_router = Router()


task_router.post("/create-task/", createTaskValidation, getToken, create_task)
task_router.put("/update-task/:id", createTaskValidation, getToken, update_task)
task_router.delete("/delete-task/:id", delete_task)
task_router.get("/all-task/", getToken, all_tasks)

module.exports = task_router
