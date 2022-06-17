var DataTypes = require("sequelize").DataTypes;
var _conversations = require("./conversations");
var _message = require("./message");
var _participants = require("./participants");
var _users = require("./users");

function initModels(sequelize) {
  var conversations = _conversations(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var participants = _participants(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  message.belongsTo(conversations, { as: "consersation", foreignKey: "consersation_id"});
  conversations.hasMany(message, { as: "messages", foreignKey: "consersation_id"});
  participants.belongsTo(conversations, { as: "conversation", foreignKey: "conversation_id"});
  conversations.hasMany(participants, { as: "participants", foreignKey: "conversation_id"});
  conversations.belongsTo(users, { as: "created_by_user", foreignKey: "created_by"});
  users.hasMany(conversations, { as: "conversations", foreignKey: "created_by"});
  message.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasMany(message, { as: "messages", foreignKey: "sender_id"});
  participants.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(participants, { as: "participants", foreignKey: "user_id"});

  return {
    conversations,
    message,
    participants,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
