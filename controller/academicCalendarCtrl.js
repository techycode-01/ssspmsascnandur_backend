const academicCalendarModel = require("../models/academicCalendarModel");
const asyncHandler = require("express-async-handler");

const createAcademicCalendar = asyncHandler(async (req, res) => {
    try {
        const data = await academicCalendarModel.create(req.body);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const allAcademicCalendar = asyncHandler(async (req, res) => {
    try {
        const data = await academicCalendarModel
            .find()
            .sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const singleAcademicCalendar = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const data = await academicCalendarModel.findById(id);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const updateAcademicCalendar = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await academicCalendarModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteAcademicCalendar = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await academicCalendarModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createAcademicCalendar,
    allAcademicCalendar,
    singleAcademicCalendar,
    updateAcademicCalendar,
    deleteAcademicCalendar,
};
