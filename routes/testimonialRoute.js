const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createClient, allClient, singleClient, updateClient, deleteClient } = require('../controller/testimonialCtrl');

const router = express.Router();

router.post('/', createClient);

router.get('/all', allClient);

router.get('/single/:id',singleClient);

router.put('/update/:id', updateClient);

router.delete('/delete/:id', deleteClient);

module.exports = router;