const {newMessageSchema}=require("../schemas/messageSchema")
function messageValidator(body){
let message_schema= newMessageSchema.validate(body,{abortEarly:false})
if(message_schema.error?.details){
    let message=message_schema.error.details.map((err)=>err.message)
    console.log(message)
    throw new Error(message.join("\n"))
}else{
    return message_schema
}

}

module.exports={messageValidator}