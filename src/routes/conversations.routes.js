const { Router } = require("express");

const { createConversation, participanUsers } = require("../controllers/conversations.controllers");


const router = Router();

router.get('/api/v1/conversations/:id/messages', participanUsers);
router.post('/api/v1/conversations', createConversation);

// router.delete("/api/v1/conversations/:id",deleteConversation)

module.exports = router;
