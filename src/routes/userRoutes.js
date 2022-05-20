const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/signup', userController.signup)

router.post('/logIn', userController.logIn)

router.get('/logIn/update', userController.update)

router.post('/victory', userController.victory)

router.post('/buyWeapon', userController.buyWeapon)

module.exports = router
