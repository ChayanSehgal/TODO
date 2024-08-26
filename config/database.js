const mongoose=require("mongoose");
require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)  
     .then(()=>{
        console.log("Db connect hogya");
     })
     .catch((error)=>{
        console.log("Issue hai koi to")
        //code end krne ka matlab hai 1
        process.exit(1);
     });
}
module.exports=dbConnect;
