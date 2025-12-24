const mongoose = require("mongoose");

const teachingStaffSchema = new mongoose.Schema(
    {
        images: [
            {
                public_id: String,
                url: String,
            },
        ],
        name: {
            type: String,
        },
        designation: {
            type: String,
        },
        department: {
            type: String,
        },
        subject: {
            type: String,
        },
        mobile: {
            type: String,
        },
        email: {
            type: String,
        },
        qualification: {
            type: String,
        },
        experience: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("TeachingStaff", teachingStaffSchema);
