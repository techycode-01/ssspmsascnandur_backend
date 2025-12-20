const testimonialModel = require("../models/testimonialModel");
const asyncHandler = require('express-async-handler');

const createClient = asyncHandler(async(req, res) => {
    try {
        const newData = await testimonialModel.create(req.body);
        res.json(newData);
    } catch (error) {
        throw new Error(error);
    }
});

const updateClient = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const updated = await testimonialModel.findByIdAndUpdate(id, req.body, {new:true});
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteClient = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const deleted = await testimonialModel.findByIdAndDelete(id);
        res.json(deleted)
    } catch (error) {
        throw new Error(error);
    }
});

const allClient = asyncHandler(async(req, res) => {
    try {
        const data = await testimonialModel.find();
        res.json(data);
    } catch (error) {
        throw new Error(error)
    }
});

const singleClient = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const data = await testimonialModel.findById(id);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createClient,
    updateClient,
    deleteClient,
    allClient,
    singleClient
}