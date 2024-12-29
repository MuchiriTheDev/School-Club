const joi=require("joi")

const newMessageSchema=joi.object({
    message_text: joi.string().required(),
})
module.exports={newMessageSchema}