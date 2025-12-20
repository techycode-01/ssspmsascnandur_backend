const upComingEventModel = require("../models/upComingEventModel");
const asyncHandler = require('express-async-handler');

const createUpCome = asyncHandler(async(req,res) => {
    try {
        const newupEvent = await upComingEventModel.create(req.body);
        res.json(newupEvent);
    } catch (error) {
        throw new Error(error);
    }
});

const allUpCome = asyncHandler(async(req,res) => {
    try {
        const getAllEvent = await upComingEventModel.find();
        res.json(getAllEvent)
    } catch (error) {
        throw new Error(error);
    }
});

const singleUpCome = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const getSingle = await upComingEventModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateUpCome = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const updatedEvent = await upComingEventModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedEvent);
    } catch (error) {
        throw new Error(error);
    }
});


const deleteUpCome = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        await upComingEventModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createUpCome, allUpCome, singleUpCome, deleteUpCome, updateUpCome};