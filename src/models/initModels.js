const User = require('./user.models');
const Message = require('./messages.models');
const Participants = require('./participants.models');
const Conversation = require('./conversations.models');

const initModels = () => {

    User.hasMany(Conversation, { foreignKey: "people_id" });
    Conversation.belongsTo(User, { foreignKey: "people_id" });

    User.hasMany(Message, { foreignKey: "message_id" });
    Message.belongsTo(User, { foreignKey: "message_id" });

    User.hasMany(Participants, { foreignKey: "user_id" });
    Participants.belongsTo(User, { foreignKey: "user_id" });

    Conversation.hasMany(Message, { foreignKey: "conversation_id" });
    Message.belongsTo(Conversation, { foreignKey: "conversation_id" });

    Conversation.hasMany(Participants, { foreignKey: "conversations_id" });
    Participants.belongsTo(Conversation, { foreignKey: "conversations_id" });



};

module.exports = initModels;