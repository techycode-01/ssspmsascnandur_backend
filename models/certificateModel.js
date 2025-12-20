const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    images:[
        {
            public_id: String,
            url: String
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);