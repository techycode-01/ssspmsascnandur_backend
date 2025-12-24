const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createTeams, allTeams, singleTeams, updateTeams, deleteTeams } = require('../controller/ourTeamCtrl');

const router = express.Router();

router.post('/', createTeams);

router.get('/all', allTeams);

router.get('/single/:id', singleTeams);

router.put('/update/:id', updateTeams);

router.delete('/delete/:id', deleteTeams);

module.exports = router;