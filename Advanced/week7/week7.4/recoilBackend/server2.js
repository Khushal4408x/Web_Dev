const epress=require("express")
const cors=require("cors")
const app=epress();
app.use(cors())
const todos=[
    {id:1,
        title:"go to gym",
        description:"from 6 to 7"
    },
    {
        id:2,
        title:"breakfast",
        description:"till 7 30"
    }
]
app.get("/",(req,res)=>{
    const id=Number(req.query.id);

    const  todo=todos.find(t=>t.id===id);
    if(!todo){
        return res.status(404);
    }
    res.json(
    todo

    )
})

app.listen(3000,()=>{
    console.log("running on 3000")
})
