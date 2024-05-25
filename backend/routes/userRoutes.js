const express = require('express');
const {registerctrl,
       loginctrl}=require('../controllers/userctrl/userctrl');
const usersRoute = express.Router();

//users/register
usersRoute.post('/register',registerctrl);

//users/login
usersRoute.post('/login',loginctrl);


module.exports=usersRoute;