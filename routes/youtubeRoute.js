const express = require('express');
const { createYoutube, allYoutube, singleYoutube, deleteYoutube, updateYoutube } = require('../controller/youtubeCtrl');

const router = express.Router();

router.post("/", createYoutube);

router.get('/all', allYoutube);

router.get("/single/:id", singleYoutube);

router.put("/:id", updateYoutube);

router.delete("/delete/:id", deleteYoutube);

module.exports = router; 