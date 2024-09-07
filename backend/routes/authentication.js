const express = require('express');
const handleLogin = require("../controllers/User-Login-Contoller/login");
const handleregister = require("../controllers/User-Signup-Controller/signup");
const router = express.Router();


router
    .route('/login')
    .post(handleLogin)


router
    .route('/register')
    .post(handleregister)


module.exports = router;