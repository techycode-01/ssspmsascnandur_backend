const blogModel = require("../models/blogModel");
const asyncHandler = require('express-async-handler');

const createBlog = asyncHandler(async(req,res) => {
    try {
        const newLink = await blogModel.create(req.body);
        res.json(newLink);
    } catch (error) {
        throw new Error(error);        
    }
});

const allBlog = asyncHandler(async(req,res) => {
    try {
        const getAll = await blogModel.find();
        res.json(getAll)
    } catch (error) {
        throw new Error(error);
    }
});

const singleBlog = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const getSingle = await blogModel.findById(id);
        res.json(getSingle);
    } catch (error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const update = await blogModel.findByIdAndUpdate(id, req.body, {new:true});
        res.json(update);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await blogModel.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createBlog, allBlog, singleBlog, updateBlog, deleteBlog};
