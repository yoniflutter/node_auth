const express = require('express');
const { index, home, login_get, signup_get, login_post, signup_post } = require('../controller/auth');
const router = express.Router();

router.get('/', index);
router.get('/home', home);
router.get('/login', login_get);
router.get('/signup', signup_get);
router.post('/login', login_post);
router.post('/signup', signup_post);

module.exports = router;