const router=require("express").Router()
const User = require("../Models/User")
const bcrypt = require('bcrypt');

router.post("/register",  (req,res)=>{
    try{
        const salt= bcrypt.genSalt(10);
        const hashedPassword= bcrypt.hash(require.body.password,salt);
        
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPassword,

        });

         newUser.save();
       // res.status(200).json(user._id);

    }catch(err){
        res.status(500).json(err)
    }
});

router.post("/login", async (req,res)=>{
    try{
        //find user
        const user =await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wrong Username or Password");
        //validate password
        const validPassword=await bcrypt.compare(req.body.password,user.password);
        !validPassword && res.status(400).json("Wrong Username or Password");

        res.status(200).json({_id: user._id, username:username});
        
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports=router