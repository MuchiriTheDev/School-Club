const { messageValidator } = require("../validators/messagesValidator")



async function createMessage(req, res) {
  try {
    const message_body=req.body
    const { message_text } = message_body
    let {value}=messageValidator(message_body)

const {pool}=req
    const user=req.session.user
if(pool.connected){
    const request = await pool.request().input("user_id",user.user_id).input("message_text",message_text).execute("CreateMessage")
    res.status(201).json({ success: true, message: "Message sent successfully" });
}
  } catch (error) {
    console.error(error.message);
  res.status(500).send(error.message)
  }
}
async function getMessages(req,res){    
    try {
      const {pool}=req
      const user=req.session.user
      if(pool.connected){
          const request = await pool.request().input("user_id",user.user_id).execute("MessagesForUser")
          res.status(200).json({success:true,data:request.recordset})
      } 
    } catch (error) {
      console.error(error.message);
      res.status(500).json({success:false,message:error.message})
    } 
    }
    async function getUsersMessage(req,res){ 
   try {
    const {pool}=req
const {id}=req.params

const request = await pool.request().input("user_id",id).execute("MessagesForUser")
res.status(200).json({success:true,data:request.recordset})
   } catch (error) {
    console.log(error.message)
    res.status(500).json({success:false,message:error.message})
   }
    }
    async function markAsRead(req,res){
      try {
        const {pool}=req
        if(pool.connected){ 
          const {id}=req.params
          const request = await pool.request().input("message_id",id).execute("MarkMessageAsRead")
          res.status(200).json({success:true,message:"Message marked as read"})
        }
      } catch (error) {
       console.log(error.message)
        res.status(500).json({success:false,message:error.message}) 
      }
     
    }
module.exports = { createMessage,getMessages,getUsersMessage,markAsRead };
