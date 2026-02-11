const zod =require("zod");
const express=require("express");
const app=express();
app.use(express.json())
function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password: zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log(response);
    return response;
}

app.post("/login",function(req,res){
    const response=validateInput(req.body);
    if(!response.success){
        res.json({msg:"Wrong Input"})
    return;
    }
    else{res.send("HII")
        return;
    }
});
app.listen(3000)