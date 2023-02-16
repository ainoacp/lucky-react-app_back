const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const breedSchema = new Schema(
    {
        "Perro": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum:[ 
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
                ]
            },
        ], // solo pueden ser los que tengan role perro
        "Gato": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum:[ 
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
                ]
            }
        ],
        "Conejo": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Blanco de Hotot",
                    "Rex",
                    "Cabeza de león",
                    "Belier",
                    "English angora",
                    "Toy",
                    "Gigante de Flandes",
                    "Tan",
                    "Otro"
                ]
            }
        ], 
        "Cobaya": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Americana",
                    "Peruana",
                    "Abisinia",
                    "Crestada o self",
                    "Rex",
                    "Coronet",
                    "Silkie",
                    "Texel",
                    "Otro"
                ]
            }
        ],
        "Pequeño mamífero": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Rata",
                    "Ratón",
                    "Jerbo",
                    "Hámster",
                    "Otro"
                ]
            }
        ],
        "Hurón": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Whippet",
                    "Estándar",
                    "Angora",
                    "Bull",
                    "Otro"
                ] 
            }
        ],
        "Pez": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
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
                ]
            }
        ],
        "Reptil": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Tortuga",
                    "Gecko",
                    "Camaleón",
                    "Iguana",
                    "Serpiente",
                    "Otro"
                ]
            }
        ],
        "Anfibio": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Rana",
                    "Salamandra",
                    "Tritón",
                    "Ajolote",
                    "Otro"
                ]
            }
        ],
        "Arácnido o insecto": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Tarántulas",
                    "Escorpiones",
                    "Mantis",
                    "Ciempies",
                    "Otro"
                ]
            }
        ],
        "Ave": [
            {
                type: Schema.Types.ObjectId, ref: 'Animal',
                enum: [
                    "Periquitos",
                    "Canarios",
                    "Diamantes",
                    "Jilgueros",
                    "Agapornis",
                    "Ninfas",
                    "Cotorras",
                    "Cacatúas",
                    "Yaco",
                    "Guacamayo",
                    "Eclectus",
                    "Otro"
                ]
            }
        ],
    },{
        timestamps: true
    }
);

const Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;