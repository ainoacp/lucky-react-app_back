const express = require('express');
const {register, login, getUsers, getUserById} = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get ('/', getUsers);
router.get('/:id', getUserById)
// router.post('/') checksession

module.exports = router;
