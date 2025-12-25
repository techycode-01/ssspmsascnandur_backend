const syllabusModel = require("../models/syllabusModel");
const asyncHandler = require("express-async-handler");

const createSyllabus = asyncHandler(async (req, res) => {
    try {
        const data = await syllabusModel.create(req.body);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const allSyllabus = asyncHandler(async (req, res) => {
    try {
        const data = await syllabusModel.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const singleSyllabus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const data = await syllabusModel.findById(id);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const updateSyllabus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await syllabusModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteSyllabus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await syllabusModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createSyllabus,
    allSyllabus,
    singleSyllabus,
    updateSyllabus,
    deleteSyllabus,
};
