const { Router } = require("express");
const {createParticipants} = require("../controllers/participants.controllers");

const router = Router();

router.post('/api/v1/user', createParticipants)

module.exports = router;