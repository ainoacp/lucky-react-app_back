const mongoose = require('mongoose');//Para conectarse a la DB
const Animals = require('../api/models/animal.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const animals = [
{
    "especie":"",
    "fecha de nacimiento": "2020-01-23",
    "sexo": "Hembra",
    "tamaño": "Pequeño",
    "peso": 0.3,
    "vacunado": false,
    "desparasitado": false,
    "sano": true,
    "esterilizado": false,
    "identificado": true,
    "microchip": false,
    "nombre": "Kiwi",
    "ubicacion": "Comunidad de Madrid",
    "ciudad": "Madrid",
},
{
    "especie": "Ave",
    "fecha de nacimiento": "2020-03-07",
    "sexo": "Macho",
    "tamaño": "Pequeño",
    "peso": 0.3,
    "vacunado": true,
    "desparasitado": true,
    "sano": true,
    "esterilizado": false,
    "identificado": true,
    "microchip": false,
    "nombre": "Blue",
    "ubicacion": "Comunidad de Madrid",
    "ciudad": "Madrid",
},
{
    "especie": "Perro",
    "fecha de nacimiento": "2017-08-27",
    "sexo": "Macho",
    "tamaño": "Grande",
    "peso": 15,
    "vacunado": true,
    "desparasitado": true,
    "sano": true,
    "esterilizado": true,
    "identificado": true,
    "microchip": true,
    "nombre": "Tommy",
    "ubicacion": "Comunidad de Madrid",
    "ciudad": "Madrid",
},
{
    "especie": "Gato",
    "fecha de nacimiento": "1994-10-11",
    "sexo": "Hembra",
    "tamaño": "Mediano",
    "peso": 5,
    "vacunado": true,
    "desparasitado": true,
    "sano": true,
    "esterilizado": true,
    "identificado": true,
    "microchip": true,
    "nombre": "Simba",
    "imagenes": "",
    "ubicacion": "Comunidad de Madrid",
    "ciudad": "Madrid",
},
{
    "especie": "Gato" ,
    "fechaDeNacimiento": "2012-06-10" ,
    "sexo": "Hembra" ,
    "tamaño": "Mediano",
    "peso": "4,5",
    "vacunado": true,
    "desparasitado": true ,
    "sano":true ,
    "esterilizado": true,
    "identificado": true,
    "microchip":false,
    "nombre": "Saphira" ,
    "imagenes":[
        "https://t2.ea.ltmcdn.com/es/razas/9/7/1/siames_179_0_orig.jpg",
        "https://static.miscota.com/consejos/wp-content/uploads/2016/11/shutterstock_87157474.jpg",
        "https://img.remediosdigitales.com/94c1d4/gato-siames-1/1366_2000.jpeg"
    ],
    "ubicacion":"Madrid" ,
    "ciudad": "Madrid",
    "personalidad": "Juguetona",
    "historia":"Me encontraron en Galicia, aunque en realidad, yo los encontré a ellos...",
    "aSaber": "Es una gata muy juguetona que necesita atencion, correr y mimos por las noches, si no, te pisara la cabeza para despertarte.",
    "requisitosAdopcion":"Ser una persona activa y que no le importe recibir atencion",
    "tasaAdopcion": 10,
    "seEnvia": "A Madrid solo"
},{
    "especie": "Gato" ,
    "fechaDeNacimiento": "2012-06-10" ,
    "sexo": "Hembra" ,
    "tamaño": "Mediano",
    "peso": "4,5",
    "vacunado": true,
    "desparasitado": true ,
    "sano":true ,
    "esterilizado": true,
    "identificado": true,
    "microchip":false,
    "nombre": "Saphira" ,
    "images":"https://t2.ea.ltmcdn.com/es/razas/9/7/1/siames_179_0_orig.jpg",
    "imagenes":[
        "https://t2.ea.ltmcdn.com/es/razas/9/7/1/siames_179_0_orig.jpg",
        "https://static.miscota.com/consejos/wp-content/uploads/2016/11/shutterstock_87157474.jpg",
        "https://img.remediosdigitales.com/94c1d4/gato-siames-1/1366_2000.jpeg"
    ],
    "ubicacion":"Madrid" ,
    "ciudad": "Madrid",
    "personalidad": "Juguetona",
    "historia":"Me encontraron en Galicia, aunque en realidad, yo los encontré a ellos...",
    "aSaber": "Es una gata muy juguetona que necesita atencion, correr y mimos por las noches, si no, te pisara la cabeza para despertarte.",
    "requisitosAdopcion":"Ser una persona activa y que no le importe recibir atencion",
    "tasaAdopcion": 10,
    "seEnvia": "A Madrid solo",
    "adoptionState": "En proceso"
}   
];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allAnimals = await Animals.find();
    if(allAnimals.length > 0) {
        await Animals.collection.drop();
        console.log(`All animals were deleted from <${Animals.db.name}.${Animals.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting animals: ", error))
.then(async () => {
    const animalsMap = animals.map((item) => new Animals(item));
    await Animals.insertMany(animalsMap);
    console.log(`All animals were created in <${Animals.db.name}.${Animals.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating animals: ", error))
.finally(() => mongoose.disconnect());