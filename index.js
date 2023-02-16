const express = require('express');
const dotenv = require('dotenv');

//---------------------------------ROUTES---------------------------------
const animalRouter = require('./src/api/routes/animal.routes');
// const userRouter = require('./src/api/routes/user.routes');


dotenv.config();
const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/animals', animalRouter);
// app.use('/users', userRouter);

app.listen(5000, () => console.log('listening on port', PORT));

//"email": "angelPrueba@gmail.com",
//"password": "Logeando2023*"