const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Participants = db.define('participants', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    participan:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.TEXT,
        defaultValue: false,
        field: "user_id"
    },
    conversationId: {
        type: DataTypes.TEXT,
        defaultValue: false,
        field: "coversations_id"
    },
},
{ 
timestamps: false,
},

);

module.exports = Participants;