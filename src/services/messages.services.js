const message = require('../models/messages.models');
const conversations = require('../models/conversations.models');

class MessageServices {
    static async crea(newPublication) {
        try {
            const result = await message.create(newPublication);
            return result;
        } catch (error) {
            throw error;

        }
    }

    static async findData(id) {
        try {
            const MessageInfo = await conversations.findByPk(id, {
                include: [
                    {
                        model: message,
                        include: [
                            {
                                model: conversations,
                            }
                        ]

                    }
                ]
            })

        } catch (error) {
            throw error;
        }
    }
}



module.exports = MessageServices;









