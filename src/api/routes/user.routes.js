const express = require('express');
const {register, login, checkSession, postFav, getUserById} = require('../controllers/user.controller');
const {isAuth} = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get ('/', getUsers);
router.get('/:id', getUserById)
router.post('/checksession',[isAuth], checkSession);
router.post('/addfav', postFav)

module.exports = router;
