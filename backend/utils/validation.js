const { check } = require('express-validator');

exports.loginValidation = [
    // check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    check('email').isEmail().withMessage('Please provide a valid email address'),
]

exports.createTaskValidation = [
    check("title").notEmpty().withMessage("Tittle field require"),
    check("description").notEmpty().withMessage("Description field require"),
    check("dueDate").notEmpty().withMessage("Due date field require"),
    check("startDate").notEmpty().withMessage("Start date field require"),
]



exports.registerValidation = [
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    check('email').isEmail().withMessage('Please provide a valid email address'),
    check('username').isLength({min:4}).withMessage('Username must be at least 4 characters long'),
    check('contact').isLength({min:10}).withMessage('Contact must be at least 10 characters long'),
]

