const mongoose =require("mongoose")

const messageSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default:new Date()
  },
},{timestamps:true});

const Message=mongoose.model("Message",messageSchema)

module.exports=Message