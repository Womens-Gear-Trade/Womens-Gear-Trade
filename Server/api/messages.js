const express = require('express');
const {
  createMessage,
  getAllMessages,
  getMessageById,
  getMessageByPostId,
  getMessageByCreatorId,
  getMessageByActive,
  attachMessageToGearPost,
} = require('../db');

const { requireUser } = require('./utils');
const messagesRouter = express.Router();

// GET /api/messages

messagesRouter.get('/', async (req, res, next) => {
  try {
    const messages = await getAllMessages();
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

messagesRouter.get('/:messageId', requireUser, async (req, res, next) => {
  let id = req.params.messageId;
  try {
    if (req.user) {
      const messageById = await getMessageById(id);
      res.send(messageById);
    }
  } catch (error) {
    next(error);
  }
});

messagesRouter.get('/:userId/message', requireUser, async (req, res, next) => {
  let id = req.params.userId;
  // console.log('These are the params', req.params.userId);
  try {
    if (req.user) {
      const userMessage = await getMessageByCreatorId(id);
      res.send(userMessage);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /api/messages

messagesRouter.post('/', requireUser, async (req, res, next) => {
  const { postId, content } = req.body;
  if (req.user);
  {
    try {
      const creatorId = req.user.id;

      console.log('this the user id:', creatorId);
      const newMessage = await createMessage({
        postId,
        creatorId,
        content,
      });

      res.send(newMessage);
    } catch (error) {
      next(error);
    }
  }
});

module.exports = messagesRouter;
