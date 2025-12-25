const managementCommitteeModel = require("../models/managementCommitteeModel");
const asyncHandler = require("express-async-handler");

const createManagementCommittee = asyncHandler(async (req, res) => {
    try {
        const data = await managementCommitteeModel.create(req.body);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const allManagementCommittee = asyncHandler(async (req, res) => {
    try {
        const data = await managementCommitteeModel.find();
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const singleManagementCommittee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const data = await managementCommitteeModel.findById(id);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
});

const updateManagementCommittee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await managementCommitteeModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteManagementCommittee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await managementCommitteeModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createManagementCommittee,
    allManagementCommittee,
    singleManagementCommittee,
    updateManagementCommittee,
    deleteManagementCommittee,
};
