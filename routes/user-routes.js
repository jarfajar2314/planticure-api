const express = require('express');
const { register, login } = require('../controllers/auth-controller');
// const {addUser} = require('../controllers/user-controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = {
    routes: router
}