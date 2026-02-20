const express=require("express")
const app=express();
    let numOfreq=0;
function ReqLogger(req,res,next){
    console.log(numOfreq);numOfreq++;
    next();
}
app.get("/assg",ReqLogger,function(req,res){
    res.json({"hello ": numOfreq});
})

app.listen(3000);