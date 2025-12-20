const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createGallery, allGallery, singleGallery, updateGallery, deletedGallery } = require('../controller/galleryCtrl');


const router = express.Router();

// create crousel routes
router.post('/', createGallery);

// get home page images
router.get('/all', allGallery);

// fetch single Gallery images
router.get('/single/:id', singleGallery);

// update 
router.put('/update/:id', updateGallery);

// delete
router.delete('/delete/:id', deletedGallery);

module.exports = router;