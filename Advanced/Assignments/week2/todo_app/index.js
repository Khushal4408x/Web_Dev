const express=require("express")
const port =3001;
const app =express();
const arr=["Dummy Task"];

app.get('/',function(req,res){
    res.send("hi from server");
    res.send(arr);
});

app.post('/addtask',function(req,res){
    const newTask=req.body.newtask;
    arr.push(newTask);
    // res.redirect("/")
})
app.get()

app.listen(port);