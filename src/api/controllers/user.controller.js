const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');

const register = async(req, res, next) => {
    try {
        const newUser = new User(req.body);
        if(!validationEmail(newUser.email)){
            res.status(400).send({code:400, message:'Invalid Email'})
            return next();
        }
        if(!validationPassword(newUser.password)){
            res.status(400).send({code:400, message:'Invalid password'})
            return next();
        }

        const users = await User.find({email:newUser.email})
        if(users.length > 0){
            res.status(400).send({code:400, message:'Duplicated Email'})
            return next();
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);   
        const createdUser = await newUser.save();
        return res.status(200).json(createdUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const login = async(req, res, next) => {
    // console.log(req.body);
    try {
        const myUser = await User.findOne({email: req.body.email}).populate("pets");;
        if(bcrypt.compareSync(req.body.password, myUser.password)){
            const token = generateSign(myUser._id, myUser.email)
            return res.status(200).json({myUser, token});
        }else{
            res.status(400).send({code:400, message:'Password Error'})
            return next()
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//hacer un checksession

const getUserById = async(req, res) => {
    try {
        const {id} = req.params;
        const myUser = await User.findById(id);
        if (myUser) {
            return res.status(200).json(myUser)
        } else {
            return res.status(404).json('Any user with that id');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    register, 
    login, 
    getUsers, 
    getUserById
}