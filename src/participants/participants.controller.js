const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');

const models = initModels(sequelize);

const getAllParticipants = async (conversation_id) => {
    const participants = await models.participants.findAll({
        where: {
            conversation_id,
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    });
    return participants;
};

const getConversationInfo = async (id) => {
    const conversation = await models.conversations.findOne({
        where: { id },
        include: [
            {
                model: models.participants,
                as: 'participants',
                include: [
                    {
                        model: models.users,
                        as: 'user',
                        attributes: {
                            exclude: ['password'],
                        },
                    },
                ],
            },
        ],
    });
    return conversation;
};

module.exports = {
    getAllParticipants,
    getConversationInfo,
};
