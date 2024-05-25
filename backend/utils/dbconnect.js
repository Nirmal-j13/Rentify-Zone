const mongoose = require('mongoose');

//connect to database

//check the connections
const dbconnect = async (req,res)=>{
    try 
    {
       await  mongoose.connect("mongodb+srv://Nirmal-J:Nirmal123@cluster0.luefh0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
       console.log("Db Connected")
    }
    catch(err)
    {
        console.log(err);
    }
}

dbconnect();