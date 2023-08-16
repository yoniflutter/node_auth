const express = require('express');
const { login_get, signup_get, login_post, signup_post } = require('../controller/auth');
const router = express.Router();

router.get('/login', login_get);
router.get('/signup', signup_get);
router.post('/login', login_post);
router.post('/signup', signup_post);

module.exports = router;