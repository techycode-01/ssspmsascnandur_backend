const express = require("express");
const {
    createAcademicCalendar,
    allAcademicCalendar,
    singleAcademicCalendar,
    updateAcademicCalendar,
    deleteAcademicCalendar,
} = require("../controller/academicCalendarCtrl");

const router = express.Router();

router.post("/", createAcademicCalendar);
router.get("/all", allAcademicCalendar);
router.get("/single/:id", singleAcademicCalendar);
router.put("/update/:id", updateAcademicCalendar);
router.delete("/delete/:id", deleteAcademicCalendar);

module.exports = router;
