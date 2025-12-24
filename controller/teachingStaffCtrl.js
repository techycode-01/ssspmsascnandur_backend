const teachingStaffModel = require("../models/teachingStaffModel");
const asyncHandler = require("express-async-handler");

const createTeachingStaff = asyncHandler(async (req, res) => {
    try {
        const newStaff = await teachingStaffModel.create(req.body);
        res.json(newStaff);
    } catch (error) {
        throw new Error(error);
    }
});

const allTeachingStaff = asyncHandler(async (req, res) => {
    try {
        const getAll = await teachingStaffModel.find();
        res.json(getAll);
    } catch (error) {
        throw new Error(error);
    }
});

const singleTeachingStaff = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getSingle = await teachingStaffModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateTeachingStaff = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const update = await teachingStaffModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json(update);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteTeachingStaff = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await teachingStaffModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createTeachingStaff,
    allTeachingStaff,
    singleTeachingStaff,
    updateTeachingStaff,
    deleteTeachingStaff,
};
