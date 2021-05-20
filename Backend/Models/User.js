const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:string,
        require: true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:string,
        require:true,
        max:50,
        unique:true,
    },
    password:{
        type:string,
        require=true,
        min:8,
    }, 
    },
{timestamps:true});

module.exports=mongoose.model("User", UserSchema);