
const express=require("express")
const app=express();
const zod=require("zod");
app.use(express.json());

// const schema=zod.array(zod.number());
const schema=zod.object({
    email: zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US"))
    ,kidneys:zod.array(zod.number())
})
app.post("/healthChk",function(req,res){
   const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"INVALID inp"
        })
    }
    else{
    res.send({response})}
})


// Global catches (Middlewares which takes four inputs and are placed at last)
//ERror handling middleware
// app.use(function(err,req,res,next){
//     res.json({msg:"sorry somthing is up with our server"})
// })
app.listen(3000);