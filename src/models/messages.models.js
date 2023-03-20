const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Message = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    message_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}


);


module.exports = Message;