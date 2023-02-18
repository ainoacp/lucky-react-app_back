const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');


const getUsers = async(req, res) => {
    try {        
        const allUsers = await User.find();
        res.status(200).json(allUsers);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};


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
        const myUser = await User.findOne({email: req.body.email});
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


module.exports = {register, login, getUsers}