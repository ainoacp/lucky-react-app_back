const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
    console.log('este es id',id,'este es email',email  );
    return jwt.sign({id,email}, process.env.JWT_KEY, {expiresIn: '1y'});
}

const verifySign = (token) => {
    console.log('verificando sign...',token);

    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports ={generateSign, verifySign};