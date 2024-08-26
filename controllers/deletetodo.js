const Todo=require("../models/Todo");
exports.deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Todo Deleted",
        })
    }
    catch(err){
        res.json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}