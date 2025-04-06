const express = require('express');
const googleLogin = require('../controllers/authController');
const authRouter = express.Router();


authRouter.get('/login', (req, res) => {
    res.send('Login Page');
}
);
authRouter.get('/google',googleLogin);

module.exports = authRouter; 