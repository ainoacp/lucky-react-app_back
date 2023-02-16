const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const animalSchema = mongoose.Schema(
    {
    "especie": {type:'String', required:true},
    "fecha de nacimiento":  {type:'date', required:true},
    "sexo": {type:'String', required:true},
    "tamaño": {type:'Number', required:true},
    "peso": {type:'Number', required:true},
    "vacunado": {type:'Boolean', required:true},
    "desparasitado": {type:'Boolean', required:true},
    "sano": {type:'Boolean', required:true},
    "esterilizado": {type:'Boolean', required:true},
    "identificado": {type:'Boolean', required:true},
    "microchip": {type:'Boolean', required:true},
    "nombre": {type:'String', required:true},
    "ubicacion": {type:'String', required:true},
    "ciudad": {type:'String', required:true},
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Animal = mongoose.model('animal',animalSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Animal;