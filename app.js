const express=require("express");
const path=require("path")
const bodyParser=require("body-parser");
const cors=require("cors")

const PORT=4000;
const app=express()


const isp=require('./routes/isp')

//Middleware
app.use(cors());
app.use(bodyParser.json())

app.listen(PORT,()=>{
    console.log("Server listening on : http://localhost:",PORT);    
})

app.use('/isp',isp);

app.get('/',(req,res)=>{
    res.send("Working");    
})