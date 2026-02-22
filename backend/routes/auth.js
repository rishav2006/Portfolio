const express = require('express');
const signup = require('../controllers/Authentication/signup');
const login = require('../controllers/Authentication/login');
const logout = require('../controllers/Authentication/logout');
const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

module.exports = router;