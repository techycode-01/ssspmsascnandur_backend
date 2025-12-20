const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({
    link : {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model("Youtube", youtubeSchema);