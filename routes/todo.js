const express=require("express");
const router=express.Router();
// controller import
const{createTodo}=require("../controllers/createTodo");
const{gettodo}=require("../controllers/gettodo");
const{getbyid}=require("../controllers/getbyid");
const{updateTodo}=require("../controllers/updatetodo");
const{deleteTodo}=require("../controllers/deletetodo");
//defining api routes path ko controller se map kardiya
router.post("/createTodo",createTodo);
router.get("/gettodo",gettodo);
router.get("/getbyid/:id",getbyid);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports=router;