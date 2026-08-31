import express from 'express'
import { z } from "zod"
import User from '../models/User.js';
import JWT_SECRET from '../config.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import authMiddleware from '../middleware.js';


const signupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string(),
});
const signinSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
})
const updateUser=z.object({
    username:z.string().min(3).optional(),
    password:z.string().min(6).optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional(),
})

const userRouter = express.Router();

// userRouter.use(express.json()) already in index.js so no need

userRouter.post("/signup", async (req, res) => {
    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Invalid Input",
            errors: result.error.issues
        });
    }
    const { username, password, firstName, lastName } = result.data;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(409).json({
            message: "Username already exists"
        });
    }
    const hashedPassword=await bcrypt.hash(password,10);//salt as username
    const user = await User.create({
        username, password:hashedPassword, firstName, lastName
    });
    const token = jwt.sign(
        {
        userId: user._id
        }, 
    JWT_SECRET);

    res.status(201).json({
        message: "User created, SignUp successful",
        token: token
    });

});
userRouter.post("/signin", async (req, res) => {
    const result = signinSchema.safeParse(req.body);
    if (!result.success) {
         return res.status(400).json({
            message: "invalid  credentials format",
            errors: result.error.issues
        })    
    }
    const {username,password}=result.data;
    const user=await User.findOne({username});
    if(!user){
        return res.status(401).json({
            message:"Invalid username or password"
        });
    }
    const passwordMatch=await bcrypt.compare(password,
        user.password
    );
    if(!passwordMatch){
        return res.status(401).json({
            message:"Invalid username or password"
        });
    }

    const token =jwt.sign({
        userId:user._id
    },JWT_SECRET)

    res.json({
    message:"Signin successful",
    token:token
})
});


//Update user details
userRouter.put("/update",authMiddleware,async (req,res)=>{
    const success=updateUser.safeParse(req.body);
    if(!success.success){
        return res.status(411).json({
            message:"Error while updating info"
        })
    }
    if(success.data.username){
        const existingUser=await User.findOne({
            username:success.data.username,
            _id:{$ne:req.userId}
        })
        if(existingUser){
            return res.status(409).json({
                message:"Username already exists"
            })
        }
    }

    
    if(success.data.password){
        success.data.password=await bcrypt.hash(success.data.password,10);
    }
    await User.updateOne(
        {_id:req.userId},
        success.data    
    )
    res.json({
        message:"Updated Successfully"
    })

})

userRouter.get("/search",async (req,res)=>{
    const query=req.query.q?.trim();
    if(!query){
        return res.status(400).json({
            message:"Search query is required"
        });
    }
    const escapedQuery = query.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
    const users=await User.find({
       $or:[
         {username:{
            $regex:escapedQuery,
            $options:"i"
        }},
        {
            firstName:{
                $regex:escapedQuery,
                $options:"i"
            }
        },
        {
            lastName:{
                $regex:escapedQuery,
                $options:"i"
            }
        }
       ]
        
    }).select("-password").limit(20);
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

export default userRouter
