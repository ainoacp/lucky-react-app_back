const mongoose = require('mongoose');//Para conectarse a la DB
const Form = require('../api/models/forms.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const form = [
{
"agreement":"si",
"casero":"si",
"city":"madrid",
"conditions": true,
"direction":"calle",
"dni":"123123a",
"email":"henrrisonhamilton@hotmail.com",
"expenses":"si",
"family":"no",
"food":"si",
"garden":"si",
"home":"piso",
"name":"homer",
"needs":"si",
"petfrienly":"si",
"pets":"si",
"postal":2323,
"removal":"no",
"rental":"no",
"telf":1231231,
"visit":"no",
"what":"por q si",
"which":"loro",
}
];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    formNewUrlParser: true,
    formUnifiedTopology: true,
}).then(async () => {
    const allformrs = await Form.find();
    if(allformrs.length > 0) {
        await Form.collection.drop();
        console.log(`All formrs were deleted from <${Form.db.name}.${Form.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting animals: ", error))
.then(async () => {
    const formrsMap = form.map((item) => new Form(item));
    await Form.insertMany(formrsMap);
    console.log(`All formrs were created in <${Form.db.name}.${Form.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating formrs: ", error))
.finally(() => mongoose.disconnect());