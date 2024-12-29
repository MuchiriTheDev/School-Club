const express = require("express");
const messagesRouter = express.Router();
const {createMessage,getMessages,getUsersMessage,markAsRead} = require("../controllers/messagesControllers");

const {sessionAuthorization} = require("../middlewares/sessionAuthorization")

// POST /message
messagesRouter.use(sessionAuthorization)
messagesRouter.post("/message",createMessage);
messagesRouter.get("/messages",getMessages);
messagesRouter.get("/messages/:id",getUsersMessage)
messagesRouter.put("/message/:id",markAsRead)
module.exports = messagesRouter;
