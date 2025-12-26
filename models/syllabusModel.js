const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        fileUrl: {
            public_id: String,
            url: String,
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model("Syllabus", syllabusSchema);
