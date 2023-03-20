const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversation = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    teams: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    people_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


});

module.exports = Conversation;