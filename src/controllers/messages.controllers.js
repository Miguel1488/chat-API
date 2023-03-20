const MessageServices = require('../services/messages.services');


const Publication = async (req, res) => {

    try {
        const newPublication = req.body;
        const publication = await MessageServices.create(newPublication);
        restart.status(201).json(publication);


    } catch (error) {
        res.status(400).json(error)
    }
};

const ConversationMessage = async (req, res) => {
    try {
        const {id} = req.params
        const information = await MessageInformation.findData(id) 
        res.json(information)
    } catch (error) {
        res.status(400).json(error) 
    }
}



module.exports = {
    Publication,
    ConversationMessage,
}