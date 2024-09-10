const Task = require("../model/task_schema");
const { validationResult } = require('express-validator');

exports.create_task = async(req, res)=>{
    const { title, description, dueDate, startDate } = req.body
    
    const id = req.user

    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      // Return errors if validation fails
      return res.status(400).json({ errors: errors.array()[0] });
    }

    try {
        const due_date = new Date(dueDate)
        const start_date = new Date(startDate) 

        if(startDate > dueDate) throw new Error("Start date is ahead of due date")

        const exist_date = await Task.findOne({ startDate: start_date })
        
        if (exist_date) throw new Error("Date and time already scheduled")
        
        const new_task = await Task.create({ title, description, dueDate: due_date, startDate:start_date, user:id })
        
        if (!new_task) throw new Error("Task creating fails")
        
        return res.status(200).json({message: "Task created"})
        
    } catch (error) {
        res.status(504).json({error: error.message})
    }
}

// Update an existing task by id
exports.update_task = async (req, res) => {
    //const id = req.user

    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      // Return errors if validation fails
      return res.status(400).json({ errors: errors.array()[0] });
    }

    const { id } = req.params;

    const { title, description, dueDate, startDate } = req.body

     const due_date = new Date(dueDate)
     const start_date = new Date(startDate) 

    try {
        if (startDate > dueDate) throw new Error("Start date is ahead of due date")
        
        const task = await Task.findById({ _id: id });
        
        if (!task) throw new Error("Task not found");

        const exist_date = await Task.findOne({ start_date });

        if (exist_date && exist_date._id.toString() !== id) {
            throw new Error("Date and time already scheduled");
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = due_date || task.dueDate;
        task.startDate = start_date || task.startDate;

        const updated_task = await task.save();

        if (!updated_task) throw new Error("Task update failed");

        return res.status(200).json({ message: "Task updated successfully" });

    } catch (error) {
        return res.status(504).json({ error: error.message });
    }
};

// Delete Task
exports.delete_task = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById({_id:id});

        if (!task) throw new Error("Task not found");

        await Task.deleteOne({ _id: id });

        return res.status(200).json({ message: "Task deleted" });

    } catch (error) {
        res.status(504).json({ error: error.message });
    }
};

exports.all_tasks = async(req, res)=>{
    try {
        const userId = req.user
        
        const tasks = await Task.find({user:userId})
        console.log("task", tasks)
        if (!tasks || tasks.length <= 0) throw new Error("No tasks found")
        
        res.status(200).json({message: tasks})
        
    } catch (error) {
        res.status(504).json({ error: error.message });
    }
}