const Seller= require("../../model/seller");

//sellerpost
const sellerpostctrl=async (req,res,next)=>{
    const {place,area,noofbed,noofbath,hospitals,collegenearby} = req.body;
     //create seller
     const seller = await Seller.create({
        place,
        area,
        noofbed,
        noofbath,
        hospitals,
        collegenearby
    });
    res.json({
        status:"Success",
        id:seller._id,
        place:seller.place,
        area:seller.area,
        noofbed:seller.noofbed,
        noofbath:seller.noofbath,
        hospitals:seller.hospitals,
        collegenearby:seller.collegenearby
    });
};

//sellerdisplay
const sellerdisplayctrl=async (req,res,next)=>{
    const sellerpost = await Seller.find()
    try{
        res.json({
            status:"success",
            data:sellerpost
           });
    }
    catch(err){
       res.json(err);
    }    
}

//sellerupdate
const sellerupdatectrl=async (req,res,next)=>{
    try{
        const id=req.params.id;
        const seller = await Seller.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true,
         }) 
        res.json({
           status:"Success",
           data:seller        
        });
    }
    catch(err){
       console.log(err)
    }    
}
//sellerdelete
const sellerdeletectrl=async (req,res,next)=>{
    try{
        const {id} = req.params; 
        await Seller.findByIdAndDelete(id);
        res.status(200).json({
            status:"Success",
            data:null 
        });
    }
    catch(err){
       console.log(err)
    }    
}

//Retrive one item
const sellerretriveone=async(req,res)=>{
    try{
       const {id}=req.params;
       const seller=await Seller.findById(id,req.body,{
          new:true,
          runValidators:true
       })
       res.json({
          status:"Success",
          data:seller
       })
    }
    catch(err)
    {
        console.log(err)
       res.json({
          status:"Failed",
          data:err
       })
    }
 }

module.exports={
    sellerpostctrl,
    sellerdisplayctrl,
    sellerupdatectrl,
    sellerdeletectrl,
    sellerretriveone,
}