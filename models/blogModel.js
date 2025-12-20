const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    images:[
        {
            public_id: String,
            url: String
        }
    ],
    date: {
        type:String,
    },
    author: {
        type:String,
    },
    heading: {
        type:String,
    },
    content:{
        type:String
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);