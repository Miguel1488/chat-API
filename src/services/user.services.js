const Conversation = require('../models/conversations.models');
const User = require('../models/user.models');

class UserServices {
    static async findUser(){
        try {
            const users = await User.findAll()
            return users;

        } catch (error) {
            throw error;
        }
    }

    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser)
            return userCreated;

        } catch (error) {
            throw error;
        }
    }
    static async findConversations(id) {
        try {
            const historialUser = await User.findByPk(id,{
                include: [
                    {
                        model: Conversation

                    }
                ]
            })
            return historialUser;
        } catch (error) {
            throw error;  
        }
    }
}


module.exports = UserServices;
