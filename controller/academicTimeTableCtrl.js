const academicTimeTableModel = require("../models/academicTimeTableModel");
const asyncHandler = require("express-async-handler");

const createAcademicTimeTable = asyncHandler(async (req, res) => {
    try {
        const data = await academicTimeTableModel.create(req.body);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const allAcademicTimeTable = asyncHandler(async (req, res) => {
    try {
        const data = await academicTimeTableModel
            .find()
            .sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const singleAcademicTimeTable = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const data = await academicTimeTableModel.findById(id);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const updateAcademicTimeTable = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await academicTimeTableModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteAcademicTimeTable = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await academicTimeTableModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createAcademicTimeTable,
    allAcademicTimeTable,
    singleAcademicTimeTable,
    updateAcademicTimeTable,
    deleteAcademicTimeTable,
};
