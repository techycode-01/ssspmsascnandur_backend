const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createProgCont, allProgCont, singleProgCont, updateProgCont, deleteProgCont } = require('../controller/ourProgContCtrl');

const router = express.Router();

router.post('/', createProgCont);

router.get('/all', allProgCont);

router.get('/single/:id',singleProgCont);

router.put('/update/:id', updateProgCont);

router.delete('/delete/:id', deleteProgCont);

module.exports = router;