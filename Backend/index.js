const express=require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const app= express();
const pinRoute= require("./Routes/pins")
const userRoute=require("./Routes/pins")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB is connected")
}).catch((err)=>console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, ()=>{
    console.log("backend started");
})