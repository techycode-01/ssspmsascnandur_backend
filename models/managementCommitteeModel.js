const mongoose = require("mongoose");

const managementCommitteeSchema = new mongoose.Schema(
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

module.exports = mongoose.model("ManagementCommittee", managementCommitteeSchema);
