const express = require("express")
const app = express()
const { createTodo, updateTodo }=require("./type");
const { todo }=require("./db")
const { describe } = require("zod/v4/core");
const cors=require("cors")
//body{
// title:string
// descript:string}
app.use(express.json());
app.use(cors())

app.post("/todo", async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"u sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
        res.json({
            msg:"todo created"
        })
    
    })

app.get("/todos",async function (req, res) {
    const todos = await todo.find();
    res.json({todos})
})
app.put("/completed",async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"u sent wrong inputs"
        })
    }
    await todo.update({
        _id:req.body.id
    }, {
        completed:true
    })
    res.json({
        msg:"Updated Successfully"
    })
})
app.listen(3000);