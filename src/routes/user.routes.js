const { Router } = require("express");
const { createUser, obtainUser, historial } = require("../controllers/user.controllers");

const router = Router();
router.get('/api/v1/users/:id/conversations', historial)
router.get('/api/v1/users', obtainUser)
router.post('/api/v1/users', createUser)


module.exports = router;
