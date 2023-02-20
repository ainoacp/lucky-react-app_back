const cors = require('cors')
const express = require('express');
const dotenv = require('dotenv');

//---------------------------------ROUTES---------------------------------
const animalRouter = require('./src/api/routes/animal.routes');
const userRouter = require('./src/api/routes/user.routes');
const shelterRouter = require('./src/api/routes/shelter.routes');
const formsRouter = require ('./src/api/routes/form.routes');

dotenv.config();
const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;
const app = express();
connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH');  //definimos que metodos permitimos en nuestra API
    res.header('Access-Control-Allow-Credentials', 'true'); //podemos recibir una conexion con credenciales
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //tipos de cabeceras que permitimos
    next();
})

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://RUTADEMIFRONT.com'],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/animals', animalRouter);
app.use('/users', userRouter);
app.use('/shelters', shelterRouter);
 app.use('/form',formsRouter)
app.listen(PORT, () => console.log('listening on port', PORT));

//"email": "angelPrueba@gmail.com",
//"password": "Logeando2023*"