import mongoose from  'mongoose'
const {Schema}= mongoose

const userSchema=new Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,

})

userSchema.virtual('accounts',{
    ref:'Acount',
    localField:'_id',
    foreignField:'userId'
})

const User=mongoose.model("User",userSchema)
export default User 