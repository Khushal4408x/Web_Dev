const epress=require("express")
const cors=require("cors")
const app=epress();
app.use(cors())
app.get("/",(req,res)=>{
    res.json({
        "network":10,
        "jobs":10,
        "messaging":10,
        "notifications":10
    })
})

app.listen(3000)
