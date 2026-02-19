const Message = require("../models/messageSchema");

const handleGetMessage = async (req,res) => {
  const message = await Message.find({});
  console.log(message)
  res.render("index.ejs",{message})
};

const handleAddMessage=(req,res)=>{
     res.render("addPost.ejs");
}

const handleEditMessage= async(req,res)=>{
    const {id}=req.params
    const message = await Message.findById(id)
    res.render("editPost.ejs",{message})
}

const handleEdit=async(req,res)=>{
    const { id } = req.params;
    const { msg } = req.body;
   await Message.findByIdAndUpdate(id,{msg});
   res.redirect("/");
}

const handleMessage=async(req,res)=>{
    const {from,to,msg}=req.body
    await Message.create({ from, to, msg });
    res.redirect("/")
}

const handleDelete=async(req,res)=>{
        const { id } = req.params;
        await Message.findByIdAndDelete(id)
        res.redirect("/")
}

module.exports = {
  handleGetMessage,
  handleAddMessage,
  handleMessage,
  handleEditMessage,
  handleEdit,
  handleDelete,
};