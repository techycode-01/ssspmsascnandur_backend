const express = require('express');
const { createCertificate, allCertificate, singleCertificate, updateCertificate, deletedCertificate } = require('../controller/certificateCtrl');

const router = express.Router();

router.post('/', createCertificate);

router.get('/all', allCertificate);

router.get('/single/:id', singleCertificate);

router.put('/update/:id', updateCertificate);

router.delete('/delete/:id', deletedCertificate);

module.exports = router;