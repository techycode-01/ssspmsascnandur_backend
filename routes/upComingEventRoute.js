const express = require('express');
const { createUpCome, allUpCome, singleUpCome, deleteUpCome, updateUpCome } = require('../controller/upComingEventCtrl');

const router = express.Router();

router.post('/', createUpCome);

router.put('/update/:id', updateUpCome);

router.get('/all', allUpCome);

router.get('/single/:id',singleUpCome);

router.delete('/delete/:id', deleteUpCome);

module.exports = router;