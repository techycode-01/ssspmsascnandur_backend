const socialMediaLinkModel = require("../models/socialMediaLinkModel");
const asyncHandler = require('express-async-handler');

const createLinks = asyncHandler(async(req,res) => {
    try {
        const newLink = await socialMediaLinkModel.create(req.body);
        res.json(newLink);
    } catch (error) {
        throw new Error(error);        
    }
});

const allLinks = asyncHandler(async(req,res) => {
    try {
        const getAll = await socialMediaLinkModel.find();
        res.json(getAll)
    } catch (error) {
        throw new Error(error);
    }
});

const singleLinks = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const getSingle = await socialMediaLinkModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateLinks = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const update = await socialMediaLinkModel.findByIdAndUpdate(id, req.body, {new:true});
        res.json(update);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteLinks = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const deleteLink = await socialMediaLinkModel.findByIdAndDelete(id);
        res.json(deleteLink);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createLinks, allLinks, singleLinks, updateLinks, deleteLinks};