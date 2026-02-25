const  express=require("express")
const jwt=require("jsonwebtoken")
const jwtPassword="123456"
const app=express();
app.use(express.json());
const ALL_USERS=[
    {username:"kh@gmail.com",
        password:"123",
        name:"khushal singh"
    },
    {
        username:"xyz@gmail.com",
        password:"123",
        name:"xyz",
    }
]
function userExists(username,password){   
    //we can also use find function in js
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username &&ALL_USERS[i].password==password){
            return true;
        }
    }
    return false;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"Usr does'nt ex"
        });
    }
    var token =jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users",function(req,res){
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtPassword);
        const username=decoded.username;
        res.json({users:ALL_USERS})

    }catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        })
    }
});



app.listen(3000)