const User = require("../../model/user");

//Register
const registerctrl=async (req,res,next)=>{
    const {firstname,lastname,email,phoneno,password} = req.body;
    try{
        const userfound = await User.findOne({email});
        if(!userfound)
        {
        //create user
        const user = await User.create({
            firstname,
            lastname,
            email,
            phoneno,
            password
        });
        res.json({
            status:"Success",
            id:user._id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            phoneno:user.phoneno,
            password:user.password,
        });
      }
    }
    catch(err){
        console.log(err)
    }
};

//Login
const loginctrl=async (req,res,next)=>{
    const {email,password} = req.body;
    try{
        const userfound = await User.findOne({email});
       
        if(userfound)
        {
        //check password
        if(password===userfound.password)
        {
            res.json({
                status:"Success",
                firstname:userfound.firstname,
                lastname:userfound.lastname,
                email:userfound.email,
                phoneno:userfound.phoneno,
            });
        }
        }
        else 
        {
            res.json({
                status:"Success",
                data:"Invalid User"
            });
        }
    }
    catch(err){
        console.log(err)
    }
}
module.exports={
    registerctrl,
    loginctrl,
}