const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    images:[
        {
            public_id: String,
            url: String
        }
    ],
    heading: {
        type:String,
    },
    content:{
        type:String
    },
    date: {
        type:String,
    },
    month: {
        type:String,
    },
    address:{
        type:String
    },

}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);