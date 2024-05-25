const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

//Data modelling Schema

const SellerSchema = mongoose.Schema({
    place:{
    type:String,
    required:true
   },
    area:{
    type:String,
    required:true
   },
    noofbed:{
    type:Number,
    required:true
   },
    noofbath:{
    type:Number,
    required:true
   },
   hospitals:{
    type:String,
    required:true
   },
   collegenearby:[{
    type:String,
    required:true
   }],
},
{
    timestamps:true,
    toJSON:{virtual:true},
}
);

//model
const Seller = mongoose.model("Seller",SellerSchema);

module.exports=Seller;
