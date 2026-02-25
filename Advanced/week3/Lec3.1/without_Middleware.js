const express=require("express")
const app=express();

function usernameValidator(username,password){
if(username!=="khu"||password!=='kh'){
       
        return false;
    }
    return true;
}

function kidneyValidator(KidneyId){
   if(KidneyId==1||KidneyId==2){
        return true;}
        else{return false;} 
}


app.get("/healthChk",function(req,res){
   
    const KidneyId=req.query.KidneyId;
    if(!usernameValidator(req.headers.username,req.headers.password)){
        res.status(400).json({"msg":"Wrong inputs"})
        return;
    }
     if(kidneyValidator(KidneyId)){
        res.json({msg:"Your kidney is fine"});}
        else{res.json({"msg":"Wrong KidneyId"});}
      
});

//Username validator and kidney validator can be called by other requests

app.listen(3000);
