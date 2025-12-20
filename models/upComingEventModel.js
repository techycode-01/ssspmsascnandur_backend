const mongoose = require('mongoose');

const upComeSchema = new mongoose.Schema({
    title:{
        type:String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    images:[
        {
            public_id: String,
            url: String
        }
    ],
    tagColor: {
        type: String
    },
}, {timestamps: true});

module.exports = mongoose.model('Upcoming', upComeSchema);