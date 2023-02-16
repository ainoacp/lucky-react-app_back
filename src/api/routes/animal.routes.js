const express = require('express');
const {
    getAnimals,
    getAnimalById,
    postAnimal,
    postAnimals,
    putAnimal,
    deleteAnimal,
} = require('../controllers/animal.controllers');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

deleteAnimal

//metodos GET
router.get('/', getAnimals);
router.get('/:id', getAnimalById);

//metodos POST
router.post('/',[isAuth], postAnimal);
router.post('/insertMany',[isAuth], postAnimals);

//metodos PUT
router.put('/:id',[isAuth], putAnimal);

//metodos DELETE
router.delete('/:id',[isAuth], deleteAnimal);


//---------------------------------OUTPUT---------------------------------
module.exports = router;


