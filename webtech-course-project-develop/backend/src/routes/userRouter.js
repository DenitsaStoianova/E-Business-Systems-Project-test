const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/user', userController.createUser);
router.post('/user/login', userController.loginUser);

module.exports.userRouter = router;
