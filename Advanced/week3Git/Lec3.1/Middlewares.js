const express=require("express")
const app=express();
function userMiddleware(req,res,next){
    if(username!='kh'||pass!='kh'){
        res.status(403).json({msg:"Wrong inputs"});
    }
    else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    if(kidneyId!=1&&kidneyId!=2){
        res.status(403).json({msg:"Incorrect inputs"})}
    else{
        next();
    }
};

app.get("/healthChk",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("you re healthy");
})

app.get("/KidneyChk",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("Your kidney good");
})

app.get("/heartChk",userMiddleware,function(req,res){
    res.send("Your heart is healthy");
})

//Assg Find the avg time ur server is taking to handle requests
//create 