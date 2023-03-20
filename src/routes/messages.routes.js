const { Router } = require("express");

const { Publication } = require("../controllers/messages.controllers");


const router = Router();

router.post('/api/v1/message', Publication);

// router.delete("/api/v1/conversation/:id",deleteMessage)

module.exports = router;