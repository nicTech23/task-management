const Task = require("../model/task_schema");
const { sendEmail } = require("./email");



exports.checkTasks = async () => {
    
    try {
        const now = new Date();
        const fiveMinutesBefore = new Date(now.getTime() - 5 * 60 * 1000);
        const fiveMinutesAfter = new Date(now.getTime() + 5 * 60 * 1000);

        // Find tasks where the due date is within a 5-minute window of the current time
        const tasks = await Task.find({ dueDate: { $gte: fiveMinutesBefore, $lte: fiveMinutesAfter } });

        for (let task of tasks) {
            await sendEmail(task.email, task); // Assuming the task contains the user's email
            // Optionally mark the task as notified, so it doesn't send multiple emails
            task.notified = true;
            await task.save();
        }
    } catch (error) {
        console.error('Error checking tasks:', error);
    }
};