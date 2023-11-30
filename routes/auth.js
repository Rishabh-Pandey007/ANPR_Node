// create routes for auth 
// Path: routes/auth.js

const express = require('express');
const router = express.Router();

const expressValidator = require('express-validator');

const { authController, signUpController } = require('../controller/auth');

router.post('/login',[
    expressValidator.check('emailId').isEmail().withMessage('Please enter valid email'),
    expressValidator.check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], authController);

router.post('/signup',[
    expressValidator.check('name').not().isEmpty().withMessage('Name is required'),
    expressValidator.check('emailId').isEmail().withMessage('Please enter valid email'),
    expressValidator.check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], signUpController);

module.exports = router;
