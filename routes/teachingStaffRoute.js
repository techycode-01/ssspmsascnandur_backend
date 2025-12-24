const express = require("express");
const {
    createTeachingStaff,
    allTeachingStaff,
    singleTeachingStaff,
    updateTeachingStaff,
    deleteTeachingStaff,
} = require("../controller/teachingStaffCtrl");

const router = express.Router();

router.post("/", createTeachingStaff);

router.get("/all", allTeachingStaff);

router.get("/single/:id", singleTeachingStaff);

router.put("/update/:id", updateTeachingStaff);

router.delete("/delete/:id", deleteTeachingStaff);

module.exports = router;
