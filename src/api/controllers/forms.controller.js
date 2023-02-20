const Forms = require('../models/forms.model');
//---------------------------------INPUT---------------------------------

const getForm = async(req, res) => {
    try {        
        const allForms = await Forms.find();
       
        res.status(200).json(allForm);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getFormById = async(req, res) => {
    try {
        const {id} = req.params;
        const myform = await forms.findById(id);
        return res.status(200).json(myform)
    } catch (error) {
        return res.status(500).json(error);
    }

};

const postForm = async (req,res) => {
    try {
        const newForm = req.body;
        const newforms = new forms(newForm);
        const inserted = await newforms.save();
        res.status(201).json(inserted)
    } catch (error) {
        return res.status(500).json(error);
    }
};


const putForm = async(req, res) => {
    try {
        const {id} = req.params;
        const putNewForm = new Form(req.body);
        putNewForm._id = id;
        const updatedForm = await Form.findByIdAndUpdate(id, putNewForm, {new: true});
        return res.status(200).json(updatedForm);
    } catch (error) {
        return res.status(500).json(error);
    }
}
const deleteForm = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedForm = await Form.findByIdAndDelete(id);
        return res.status(200).json(deletedForm);
    } catch (error) {
        return res.status(500).json(error);
    }
};
module.exports = {
    getForm,
    getFormById,
    postForm,
    putForm,
    deleteForm,
}