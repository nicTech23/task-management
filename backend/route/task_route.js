const { Router } = require("express")
const { create_task, update_task, delete_task, all_tasks } = require("../controller/task_controller")

const task_router = Router()


task_router.post("/create-task/:user", create_task)
task_router.put("/update-task/:id", update_task)
task_router.delete("/delete-task/:id", delete_task)
task_router.get("/all-task/", all_tasks)

module.exports = task_router
