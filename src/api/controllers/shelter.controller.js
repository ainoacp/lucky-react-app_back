const Shelter = require('../models/shelter.model');
const bcrypt = require('bcrypt');
const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');

const register = async(req, res, next) => {
    try {
        const newShelter = new Shelter(req.body);
        if(!validationEmail(newShelter.email)){
            res.status(400).send({code:400, message:'Invalid Email'})
            return next();
        }
        if(!validationPassword(newShelter.password)){
            res.status(400).send({code:400, message:'Invalid password'})
            return next();
        }

        const shelters = await Shelter.find({email:newShelter.email})
        if(shelters.length > 0){
            res.status(400).send({code:400, message:'Duplicated Email'})
            return next();
        }
        newShelter.password = bcrypt.hashSync(newShelter.password, 10);
        const createdShelter = await newShelter.save();
        return res.status(200).json(createdShelter);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const login = async(req, res, next) => {
    // console.log(req.body);
    try {
        const myShelter = await Shelter.findOne({email: req.body.email});
        if(bcrypt.compareSync(req.body.password, myShelter.password)){
            const token = generateSign(myShelter._id, myShelter.email)
            return res.status(200).json({myShelter, token});
        }else{
            res.status(400).send({code:400, message:'Password Error'})
            return next()
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {register, login}