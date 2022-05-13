const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/logIn', userController.logIn);

router.get('/logIn/update', userController.update);

router.post('/SignIn', userController.signIn);

module.exports = router