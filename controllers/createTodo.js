
const Todo=require("../models/Todo");

exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,description}=req.body;
        //create a new Todo Obj and insert in DB
        const response=await Todo.create({title,description});
        // Send json response with a success flag
        res.status(200).json(
            {
                sucess:true,
                data:response,
                message:"Entrey created successfully"
            }
        )
    }
    catch(err){
            console.log(err);
            res.status(500).json({
                success:false,
                data:"Internal server error",
                message:err.message
            })
    }
}