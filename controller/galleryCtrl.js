const galleryModel = require("../models/galleryModel");
const asyncHandler = require('express-async-handler');


// create gallery
const createGallery = asyncHandler(async (req, res) => {
    try {
        const addGallery = galleryModel.create(req.body);
        res.json(addGallery)
    } catch (error) {
        throw new Error(error)
    }
}); 

// get gallery 
const allGallery = asyncHandler(async (req, res) => {
    try {
        const getAll = await galleryModel.find();
        res.json(getAll);
    } catch (error) {
        throw new Error(error)
    };
});

// get single gallery
const singleGallery = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const getSingle = await galleryModel.findById(id);
        res.json(getSingle)
    } catch (error) {
        throw new Error(error)
    };
});


// update gallery images
const updateGallery = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
     const updateData = await galleryModel.findByIdAndUpdate(id, req.body, {new: true});
     res.json(updateData);
    } catch (error) {
     throw new Error(error);
    }
});


const deletedGallery = asyncHandler( async(req, res) => {
    const {id} = req.params;
    try {
        const deletePhoto = await galleryModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error)
    }
});


module.exports = {createGallery, updateGallery, allGallery, singleGallery, deletedGallery}
