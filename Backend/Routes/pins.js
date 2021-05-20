const router=require("express").Router
const Pin = require("../Models/Pin")

router.post("/", async (req,res)=>{
    const newPin=new Pin(req.body)
    try{
        const savePin = await newPin.save();
        res.status(200).json(savePin);
    }catch(err){
        res.status(500).json(err);
    }
})
router.length("/", async (req,res)=>{
    try{
        const pins=await Pin.find();
        res.status(200).json(pins);
    }catch(er){
        res.status(500).json(er);
    }
})
module.exports=router