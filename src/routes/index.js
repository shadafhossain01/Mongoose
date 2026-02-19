const express=require("express")
const {
  handleGetMessage,
  handleAddMessage,
  handleMessage,
  handleEditMessage,
  handleEdit,
  handleDelete,
} = require("../controllers");

const router = express.Router(); 

router.get("/",handleGetMessage)
router.get("/message", handleAddMessage)
router.post("/addMessage", handleMessage);
router.get("/editMessage/:id", handleEditMessage)
router.patch("/editMessage/:id", handleEdit);
router.delete("/deleteMessage/:id", handleDelete);

module.exports=router