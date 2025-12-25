const express = require("express");
const {
  createSyllabus,
  allSyllabus,
  singleSyllabus,
  updateSyllabus,
  deleteSyllabus,
} = require("../controller/syllabusCtrl");

const router = express.Router();

router.post("/", createSyllabus);
router.get("/all", allSyllabus);
router.get("/single/:id", singleSyllabus);
router.put("/update/:id", updateSyllabus);
router.delete("/delete/:id", deleteSyllabus);

module.exports = router;
