const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    images:[
        {
            public_id: String,
            url: String
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);