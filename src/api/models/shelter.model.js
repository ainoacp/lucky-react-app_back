const mongoose = require('mongoose');

const shelterSchema = mongoose.Schema(
    {
        name: {type: String, required:true},
        email: {type: String, required:true},
        password: {type: String, required:true}
    },
    {timestamps:true}
);

const Shelter = mongoose.model('shelter',shelterSchema);

module.exports = Shelter;