const express = require("express");
const {
    createAcademicTimeTable,
    allAcademicTimeTable,
    singleAcademicTimeTable,
    updateAcademicTimeTable,
    deleteAcademicTimeTable,
} = require("../controller/academicTimeTableCtrl");

const router = express.Router();

router.post("/", createAcademicTimeTable);
router.get("/all", allAcademicTimeTable);
router.get("/single/:id", singleAcademicTimeTable);
router.put("/update/:id", updateAcademicTimeTable);
router.delete("/delete/:id", deleteAcademicTimeTable);

module.exports = router;
