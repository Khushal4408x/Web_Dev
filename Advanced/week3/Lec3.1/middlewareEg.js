
const express=require("express")
const app=express();

let numofReq=0;
function calculateReq(req,res,next){
    numofReq++;
    console.log(numofReq);
    next();
}
app.use(calculateReq); //All routes after this line pe ye middleware by default call hoga
 app.use(express.json())//Express.json itself returns a funct therefore we need to call it. 
//CalculateReq does'nt requres call since it returns a num
app.post("/healthChk",function(req,res){
    console.log(req.body);
    res.json({
        msg:"hi therei"
    })
})

app.listen(3000);