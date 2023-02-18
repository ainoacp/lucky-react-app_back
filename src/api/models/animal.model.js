const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const animalSchema = mongoose.Schema(
    {
        "especie": {
            type:'String', 
            required:true, 
            enum:[ 
                "Perro", 
                "Gato", 
                "Conejo",
                "Cobaya", 
                "Pequeño mamífero", 
                "Hurón", 
                "Pez", 
                "Reptil", 
                "Anfibio", 
                "Arácnido o insecto", 
                "Ave"
            ]
        },
        "tipo": {

        },
        "fecha de nacimiento": {
            type:'Date', 
            required:true
        },
        "sexo": {
            type:'String', 
            required:true,
            enum: [
                "Hembra",
                "Macho"
            ]
        },
        "tamaño": {
            type:'string', 
            required:true,
            enum: [
                "Pequeño",
                "Mediano",
                "Grande"
            ]
        },
        "peso": {
            type:'Number', 
            required:true
        },
        "vacunado": {
            type:'Boolean', 
            required:true
        },
        "desparasitado": {
            type:'Boolean', 
            required:true
        },
        "sano": {
            type:'Boolean', 
            required:true
        },
        "esterilizado": {
            type:'Boolean', 
            required:true
        },
        "identificado": {
            type:'Boolean', 
            required:true
        },
        "microchip": {
            type:'Boolean', 
            required:true
        },
        "nombre": {
            type:'String', 
            required:true
        },
        "ubicacion": {
            type:'String', 
            required:true
        },
        "ciudad": {
            type:'String', 
            required:true
        },
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Animal = mongoose.model('Animal', animalSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Animal;