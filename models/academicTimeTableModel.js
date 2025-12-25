const mongoose = require("mongoose");

const academicTimeTableSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        fileUrl: {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("AcademicTimeTable", academicTimeTableSchema);
