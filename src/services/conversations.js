const Conversation = require("../models/conversations.models");
const Message = require("../models/messages.models");
const Participants = require("../models/participants.models");

class ConversationServices {


    static async create(newConversation) {
        try {
            const userCreated = await Conversation.create(newConversation)
            return userCreated;

        } catch (error) {
            throw error;
        }
    }
    static async findTexts(id) {
        try {
            const peopleConversations = await Conversation.findByPk(id, {
                include: [
                    {
                        model: Participants,
                        include: [
                            {
                                model: Message,
                            }
                        ]
                    }
                ]
            })
            return peopleConversations
        } catch (error) {
            throw error;
        }
    }
}


module.exports = ConversationServices;