const Data =require('./Data.json');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.get("/",(req,res)=>{
    res.send(Data);
});
app.listen(4000,()=>{
    console.log("server started at port 5000");
})