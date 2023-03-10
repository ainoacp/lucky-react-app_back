const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {

    return jwt.sign({id,email}, process.env.JWT_KEY, {expiresIn: '1w'});

}

const verifySign = (token) => {
    console.log('verificando sign...',token);

    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports = {
    generateSign, 
    verifySign
};