const Task = require("../model/task_schema");

exports.create_task = async(req, res)=>{
    const { title, description, dueDate } = req.body
    const {user} = req.params
    
    try {
        const date = new Date(dueDate)

        const exist_date = await Task.findOne({dueDate: date})
        
        if (exist_date) throw new Error("Date and time already scheduled")
        
        const new_task = await Task.create({ title, description, dueDate, user })
        
        if (!new_task) throw new Error("Task creating fails")
        
        return res.status(200).json({message: "Task created"})
        
    } catch (error) {
        res.status(504).json({error: error.message})
    }
}

// Update an existing task by id
exports.update_task = async (req, res) => {
    const { id } = req.params;

    const { title, description, dueDate } = req.body;

    try {
        const task = await Task.findById({_id:id});

        if (!task) throw new Error("Task not found");

        const exist_date = await Task.findOne({ dueDate });

        if (exist_date && exist_date._id.toString() !== id) {
            throw new Error("Date and time already scheduled");
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;

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
        const tasks = await Task.find()

        if (!tasks || tasks.length <= 0) throw new Error("No tasks found")
        
        res.status(200).json({message: tasks})
        
    } catch (error) {
        res.status(504).json({ error: error.message });
    }
}