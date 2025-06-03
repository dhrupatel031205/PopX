const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/user.controller.js');
const authMiddleware = require('../middlewares/auth.js');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
