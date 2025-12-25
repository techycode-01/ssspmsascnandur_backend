const express = require("express");
const {
  createManagementCommittee,
  allManagementCommittee,
  singleManagementCommittee,
  updateManagementCommittee,
  deleteManagementCommittee,
} = require("../controller/managementCommitteeCtrl");

const router = express.Router();

router.post("/", createManagementCommittee);
router.get("/all", allManagementCommittee);
router.get("/single/:id", singleManagementCommittee);
router.put("/update/:id", updateManagementCommittee);
router.delete("/delete/:id", deleteManagementCommittee);

module.exports = router;
