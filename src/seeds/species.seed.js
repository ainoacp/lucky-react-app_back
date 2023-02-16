const mongoose = require('mongoose');//Para conectarse a la DB
const Species = require('../api/models/animal.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const species = [{
perro:[
    "Braco", 
    "Beagle", 
    "Border collie", 
    "Pastor belga", 
    "Terrier", 
    "Braco", 
    "Pinscher", 
    "Bichón",
    "Perro de agua",
    "Schnauzer",
    "Cocker",
    "Shih tzu",
    "Doberman",
    "Collie",
    "Yorkshire",
    "Mastín",
    "Podenco",
    "Chow chow",
    "Bóxer",
    "Akita",
    "Teckel",
    "Caniche",
    "Labrador",
    "Pit bull",
    "Pastor alemán",
    "Galgo",
    "Shar pei",
    "Presa canario",
    "Carlino",
    "Rottweiler",
    "Husky siberiano",
    "Jack russell terrier",
    "Chihuahua",
    "Golden retriever",
    "Pinscher",
    "Bulldog",
    "Bull terrier",
    "San bernardo",
    "Dálmata",
    "Otro"
],
gato:[
    "Abisinio",
    "Asiático",
    "Azul ruso",
    "Balinés",
    "Bengalí",
    "Birmano",
    "Bobtail",
    "Bombay",
    "Burmilla",
    "Chinchilla",
    "De angora",
    "Devon rex",
    "Fold escocés",
    "Korat",
    "Laperm",
    "Maine coon",
    "Mau egipcio",
    "Munchkin",
    "Ocigato",
    "Oriental",
    "Persa",
    "Pixie",
    "Ragdoll",
    "Savannah",
    "Selkirk rex", 
    "Siamés",
    "Singapura",
    "Snowshoe",
    "Somalí",
    "Sphynx",
    "Tiffanie",
    "Van turco",
    "Otro"
],
cobaya:[
    "Americana",
    "Peruana",
    "Abisinia",
    "Crestada o self",
    "Rex",
    "Coronet",
    "Silkie",
    "Texel",
    "Otro"
],
pequeñosMamiferos:[
    "Rata",
    "Ratón",
    "Jerbo",
    "Hámster",
    "Otro"
],
Huron:[
    "Whippet",
    "Estándar",
    "Angora",
    "Bull",
    "Otro"
],
Pez:[
    "Pez ángel",
    "Pez betta",
    "Pez guppy",
    "Pez disco",
    "Pez tetra neón",
    "Pez dorado común",
    "Pez gurami enano",
    "Pez platy",
    "Pez ramirezi",
    "Pez cíclido convicto",
    "Pez cebra",
    "Otro"
],
Reptil:[
    "Tortuga",
    "Gecko",
    "Camaleón",
    "Iguana",
    "Serpiente",
    "Otro"
],
Anfibio:[
    "Rana",
    "Salamandra",
    "Tritón",
    "Ajolote",
    "Otro"
],
ArañasInsecto:[
    "Tarántulas",
    "Escorpiones",
    "Mantis",
    "Ciempies",
    "Otro"
],
Aves:[
    "Periquito",
    "Canario",
    "Diamante",
    "Jilguero",
    "Agaporni",
    "Ninfa",
    "Cotorra",
    "Cacatúa",
    "Yaco",
    "Guacamayo",
    "Eclectus",
    "Otro"
]
}];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allAnimals = await Species.find();
    if(allAnimals.length > 0) {
        await Species.collection.drop();
        console.log(`All species were deleted from <${Species.db.name}.${Species.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting species: ", error))
.then(async () => {
    const animalsMap = species.map((item) => new Species(item));
    await Species.insertMany(animalsMap);
    console.log(`All species were created in <${Species.db.name}.${Species.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating species: ", error))
.finally(() => mongoose.disconnect());