const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true, // ✅ REQUIRED
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

module.exports = mongoose.model("Syllabus", syllabusSchema);
