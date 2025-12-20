const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    images:[
        {
            public_id: String,
            url: String
        }
    ],
    name:{
        type:String
    },
    position:{
        type:String
    }
}, {timestamps:true});

module.exports = mongoose.model('Team', teamSchema);