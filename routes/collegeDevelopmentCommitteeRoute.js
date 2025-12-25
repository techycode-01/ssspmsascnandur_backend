const express = require("express");
const {
    createCDC,
    allCDC,
    singleCDC,
    updateCDC,
    deleteCDC,
} = require("../controller/collegeDevelopmentCommitteeCtrl");

const router = express.Router();

router.post("/", createCDC);
router.get("/all", allCDC);
router.get("/single/:id", singleCDC);
router.put("/update/:id", updateCDC);
router.delete("/delete/:id", deleteCDC);

module.exports = router;
