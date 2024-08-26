const Todo=require("../models/Todo");
exports.getbyid=async(req,res)=>{
    try{
        const id=req.params.id;
        const update=await Todo.findById({_id:id})
        //data for given id not found
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"No Data found with Given id"
            })
        }
        //If found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
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