
const express=require("express")
const app=express();

app.use(express.json());
app.post("/healthChk",function(req,res){
   const kidneys=req.body.kidneys;
   if(!kidneys){
    res.json({msg:"wrong inputs"});
   }
   const kidneyLength=kidneys.length;
   res.send("you have " + kidneyLength+" kidneys");
})


// Global catches (Middlewares which takes four inputs and are placed at last)
//ERror handling middleware
app.use(function(err,req,res,next){
    res.json({msg:"sorry somthing is up with our server"})
})
app.listen(3000);