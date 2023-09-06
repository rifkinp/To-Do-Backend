const express = require('express');
const userController = require('./userController');
const router = express.Router();

router.post('/register', userController.registerNewUser);
router.post('/login', userController.loginUser);

module.exports = router;
