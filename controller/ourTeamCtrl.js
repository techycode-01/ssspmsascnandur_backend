const ourTeamModel = require("../models/ourTeamModel");
const asyncHandler = require('express-async-handler');

const createTeams = asyncHandler(async(req,res) => {
    try {
        const newLink = await ourTeamModel.create(req.body);
        res.json(newLink);
    } catch (error) {
        throw new Error(error);
    }
});

const allTeams = asyncHandler(async(req,res) => {
    try {
        const getAll = await ourTeamModel.find();
        res.json(getAll)
    } catch (error) {
        throw new Error(error);
    }
});

const singleTeams = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const getSingle = await ourTeamModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateTeams = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const update = await ourTeamModel.findByIdAndUpdate(id, req.body, {new:true});
        res.json(update);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteTeams = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await ourTeamModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createTeams, allTeams, singleTeams, updateTeams, deleteTeams};