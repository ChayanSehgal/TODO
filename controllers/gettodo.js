const Todo=require("../models/Todo");
exports.gettodo=async(req,res)=>{
    try{
      //fetch all todo from database
      const todos=await Todo.find({});
      //response update krdete hain 
      res.status(200).json({
        success:true,
        data:todos,
        message:"Entire todo data is fetched"
      })
    } catch(err){
      console.log(err);
      res.status(500).json({
        success:false,
        error:err.message,
        message:"Server error"
      })
    }
}