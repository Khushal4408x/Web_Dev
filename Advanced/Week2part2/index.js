const express=require("express");
const app=express();
var users=[{
    name:"Jhon",
    kidneys:[
    {
        healthy:false
    }
    ]
}]
app.use(express.json());
app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
   const numofKidneys=johnKidneys.length;
    let numberofhealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberofhealthyKidneys+=1;
        }
    }let numberofUnhealthyKidneys=numofKidneys-numberofhealthyKidneys;
    res.json({
        johnKidneys,
        numberofhealthyKidneys
        ,numberofUnhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push(
        {
            healthy:isHealthy
        }
    )
    res.json({msg:"DONE"});
})


app.put("/",function(req,res){
    for(let i=0;i<users[0];i++){
        
    }
})
app.listen(3000);

