const express = require('express');
const { createLinks, allLinks, singleLinks, deleteLinks, updateLinks } = require('../controller/socialMediaLinkCtrl');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createLinks);

router.get('/all', allLinks);

router.get('/single/:id',singleLinks);

router.put('/update/:id', updateLinks);

router.delete('/delete/:id', deleteLinks);

module.exports = router;