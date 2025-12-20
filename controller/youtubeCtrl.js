const youtubeModel = require("../models/youtubeModel");
const asyncHandler = require('express-async-handler');

const createYoutube = asyncHandler(async(req,res) => {
    try {
        const newLink = await youtubeModel.create(req.body);
        res.json(newLink);
    } catch (error) {
        throw new Error(error);        
    }
});

const allYoutube = asyncHandler(async(req,res) => {
    try {
        const getAll = await youtubeModel.find();
        res.json(getAll)
    } catch (error) {
        throw new Error(error);
    }
});

const singleYoutube = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const getSingle = await youtubeModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateYoutube = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const updated = await youtubeModel.findByIdAndUpdate(id, req.body, {new:true});
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});


const deleteYoutube = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        await youtubeModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createYoutube, allYoutube, singleYoutube, deleteYoutube, updateYoutube};
