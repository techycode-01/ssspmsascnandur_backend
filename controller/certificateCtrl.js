const certificateModel = require("../models/certificateModel");
const asyncHandler = require('express-async-handler');

const createCertificate = asyncHandler(async (req, res) => {
    try {
        const addCertificate = certificateModel.create(req.body);
        res.json(addCertificate)
    } catch (error) {
        throw new Error(error)
    }
}); 

const allCertificate = asyncHandler(async (req, res) => {
    try {
        const getAll = await certificateModel.find();
        res.json(getAll);
    } catch (error) {
        throw new Error(error)
    };
});

const singleCertificate = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const getSingle = await certificateModel.findById(id);
        res.json(getSingle)
    } catch (error) {
        throw new Error(error)
    };
});


const updateCertificate = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
     const updateData = await certificateModel.findByIdAndUpdate(id, req.body, {new: true});
     res.json(updateData);
    } catch (error) {
     throw new Error(error);
    }
});


const deletedCertificate = asyncHandler( async(req, res) => {
    const {id} = req.params;
    try {
       await certificateModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error)
    }
});


module.exports = {createCertificate, updateCertificate, allCertificate, singleCertificate, deletedCertificate}
