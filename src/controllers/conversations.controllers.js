const ConversationServices = require('../services/conversations');

const createConversation = async (req, res) => {

    try {
        const newConversation = req.body;
        const conversation = await ConversationServices.create(newConversation);
        res.status(201).json(conversation);
    } catch (error) {
        res.status(400).json(error)
    }

};
const participanUsers = async (req, res) => {
    try {
        const { id } = req.params
        const participanHistorial = await ConversationServices.findTexts(id)
        res.json(participanHistorial)
    } catch (error) {
        res.status(400).json(error)
    }
}

// const deleteConversation = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await ConversationServices.delete(id);
//         res.status(204).send();
//     } catch (error) {
//         res.status(400).json(error)
//     }
// };

module.exports = {
    createConversation,
    participanUsers,
    // deleteConversation,
};