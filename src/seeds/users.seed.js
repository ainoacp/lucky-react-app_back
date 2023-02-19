const mongoose = require('mongoose');//Para conectarse a la DB
const Users = require('../api/models/user.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const users = [
{
    "name": "Ángel",
    "email": "angel.pozo.miranda@gmail.com",
    "password": "1234",
    "pets": [
        '63ee105efc751dbbea545343',
        '63ee105efc751dbbea545345',
        '63ee105efc751dbbea545343'
    ]
},
{
    "name": "Juanma",
    "email": "juanm.rodpar@gmail.com",
    "password": "1234",
    "pets": [
        '63ee7b3de610618ae4feb6d7',
    ]
},
{
    "name": "Jonay",
    "email": "ramirezjonay@gmail.com",
    "password": "1234",
},
{
    "name": "Jose",
    "email": "joseangelflr@gmail.com",
    "password": "1234",
},
{
    "name": "Ainoa",
    "email": "ainhoacp_94@msn.com",
    "password": "1234",
}
];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allUsers = await Users.find();
    if(allUsers.length > 0) {
        await Users.collection.drop();
        console.log(`All users were deleted from <${Users.db.name}.${Users.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting animals: ", error))
.then(async () => {
    const usersMap = users.map((item) => new Users(item));
    await Users.insertMany(usersMap);
    console.log(`All users were created in <${Users.db.name}.${Users.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating users: ", error))
.finally(() => mongoose.disconnect());