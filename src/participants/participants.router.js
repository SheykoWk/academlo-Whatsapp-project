const router = require('express').Router();
const participantsHttpHandler = require('./participants.http')

router.route('/:uuid/participants')
    .get(participantsHttpHandler.getAll)
router.route('/:uuid')
    .get(participantsHttpHandler.getConversationInfo)

module.exports = {router}