import mongoose from  'mongoose'
const {Schema}= mongoose

const userSchema=new Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,

})

userSchema.virtual('accounts',{
    ref:'Account',
    localField:'_id',
    foreignField:'userId'
})

const User=mongoose.model("User",userSchema)
export default User 