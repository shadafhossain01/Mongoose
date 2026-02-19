const mongoose =require("mongoose")

const dbConnect=async()=>{
return await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

module.exports=dbConnect