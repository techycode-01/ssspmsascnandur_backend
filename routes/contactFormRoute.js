const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createContactQuery, allContactQuery, singleContactQuery, deleteContactQuery } = require('../controller/contactFormCtrl');

const router = express.Router();


router.post("/", createContactQuery);

router.get('/all', allContactQuery);

router.get("/single/:id", singleContactQuery);

router.delete("/delete/:id", deleteContactQuery);

module.exports = router; 