const { Router } = require('express');
const { getUsers, register, login, protected, logout } = require('../controllers/auth');
const { registerValidation, loginValidation } = require('../validators/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const { userAuth } = require('../middlewares/auth-middleware');
const router = Router();


// routes
router.get('/get-users', getUsers)
router.get('/protected', protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', userAuth, logout)

module.exports = router; // export router to use in server.js