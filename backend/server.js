const express = require('express')
const dbconnect = require('./utils/dbconnect');
const user=require('./model/user')
const seller=require('./model/seller')
const usersRoute=require('./routes/userRoutes')
const sellerRoute=require('./routes/sellerRoutes')
const cors = require('cors');
const app = express();

//cors middleware
app.use(cors());

//middleware
app.use(express.urlencoded({extended:true}));

//incoming json data
app.use(express.json()); 

//User routes
app.use('/users',usersRoute);

//Seller routes
app.use('/seller',sellerRoute);

//listen to the port
app.listen(9000,()=>{
    console.log("Server is up and running at 9000");
});
