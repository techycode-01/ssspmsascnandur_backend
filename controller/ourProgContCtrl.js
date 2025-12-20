const ourProgContModel = require("../models/ourProgContModel");
const asyncHandler = require('express-async-handler');

const createProgCont = asyncHandler(async (req, res) => {
    try {
        const newLink = await ourProgContModel.create(req.body);
        res.json(newLink);
    } catch (error) {
        throw new Error(error);
    }
});

const allProgCont = asyncHandler(async (req, res) => {
    try {
        const getAll = await ourProgContModel.find();
        res.json(getAll)
    } catch (error) {
        throw new Error(error);
    }
});

const singleProgCont = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getSingle = await ourProgContModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateProgCont = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const update = await ourProgContModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(update);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteProgCont = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await ourProgContModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createProgCont, allProgCont, singleProgCont, updateProgCont, deleteProgCont };