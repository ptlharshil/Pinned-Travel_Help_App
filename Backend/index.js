const express=require("express");
const cors=require("cors");
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const app= express();
const pinRoute= require("./Routes/pins")
const userRoute=require("./Routes/users")
app.use('/public', express.static('public'));
dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB is connected")
}).catch((err)=>console.log(err));

app.use("/users", userRoute);
app.use("/pins", pinRoute);

app.listen(process.env.PORT, ()=>{
    console.log("backend started");
})