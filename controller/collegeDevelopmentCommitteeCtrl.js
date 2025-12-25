const cdcModel = require("../models/collegeDevelopmentCommitteeModel");
const asyncHandler = require("express-async-handler");

const createCDC = asyncHandler(async (req, res) => {
    try {
        const data = await cdcModel.create(req.body);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const allCDC = asyncHandler(async (req, res) => {
    try {
        const data = await cdcModel.find();
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const singleCDC = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const data = await cdcModel.findById(id);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const updateCDC = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await cdcModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteCDC = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await cdcModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCDC,
    allCDC,
    singleCDC,
    updateCDC,
    deleteCDC,
};
