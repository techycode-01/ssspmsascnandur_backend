const mongoose = require("mongoose");

const collegeDevelopmentCommitteeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        designation: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("CollegeDevelopmentCommittee", collegeDevelopmentCommitteeSchema);