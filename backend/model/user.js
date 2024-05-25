const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

//Data modelling Schema

const UserSchema = mongoose.Schema({
   firstname:{
    type:String,
    required:true
   },
   lastname:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   phoneno:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
},
{
    timestamps:true,
    toJSON:{virtual:true},
}
);

//model
const User = mongoose.model("User",UserSchema);

module.exports=User;
