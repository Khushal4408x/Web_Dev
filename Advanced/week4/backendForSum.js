const express=require ('express')
const cors=require('cors')

const port=3000;
const app=express();
app.use(cors());
app.get('/',function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.send(parseInt(a)+parseInt(b));
}) 
app.listen(port)