
const nodemailer = require('nodemailer');
// Email transporter setup using nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: 'nictech23@gmail.com',
        pass: 'mnpq zmlx vpyx uoux'
    }
});

// Function to send email
exports.sendEmail = async (email, task) => {
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Task Reminder: ' + task.title,
        text: `Your task "${task.title}" is due now. Description: ${task.description}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent to: ' + email);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

