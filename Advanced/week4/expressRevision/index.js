const express =require ('express')
const app=express();
const port=8080;

app.get('/',(req,res)=>{
 throw new Error('Something went wrong');
});

app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})