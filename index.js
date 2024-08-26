const express=require("express");
const app=express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;
 // agr port na chale to by default 4000 port lelo
//Middleware parsing ke liye
app.use(express.json());

//routes import for TODO API
const todoRoutes=require("./routes/todo");

//mount todo routes
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log("Server Started");
})

//connecting database
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    console.log("Welcome");
})