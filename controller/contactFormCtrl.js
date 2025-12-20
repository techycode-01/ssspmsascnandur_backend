const contactFromModel = require("../models/contactFromModel");
const asyncHandler = require('express-async-handler');

const createContactQuery = asyncHandler(async(req, res) => {
    try {
        const newQuery = await contactFromModel.create(req.body);
        res.json(newQuery);
    } catch (error) {
        throw new Error(error);
    }
});


const allContactQuery = asyncHandler(async(req, res)=> {
    try {
        const getAll = await contactFromModel.find();
        res.json(getAll);
    } catch (error) {
        throw new Error(error);
    }
});


const singleContactQuery = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const getSingle = await contactFromModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteContactQuery = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const deleteQuery = await contactFromModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}) 

module.exports = {createContactQuery, allContactQuery, singleContactQuery, deleteContactQuery};