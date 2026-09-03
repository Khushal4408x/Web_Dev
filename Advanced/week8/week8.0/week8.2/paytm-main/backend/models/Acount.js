import mongoose from "mongoose";
import User from "./User.js";
import { success, validate } from "zod";
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function (v) {
                const User = mongoose.model('User');    
                return await User.exists({ _id: v });
            },
            message: "User does not exist"
        }
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
       
    }
});

accountSchema.statics.transfer = async function (fromUserId, toUserId, amountRupees){
    const  amount=Math.round(amountRupees*100);//converted to paise

    const session = await mongoose.startSession();
    try{
        await  session.withTransaction(async()=>{
            // 1. Check sender exists and has balance (atomic read)
            const sender=await this.findOne({userId:fromUserId}).session(session);
            if(!sender) throw new Error('Sender account not found');
            if(sender.balance<amount) throw new Error('Insufficient balance');
            // 2. Check receiver exists 
            const receiver=await this.findOne({userId:toUserId}).session(session);
            if(!receiver) throw new Error('Reciever account not found');
            //3. Atomic update using $inc
            await this.findOneAndUpdate(
                {
                  userId:fromUserId  //search condition for the document to be updated  
                },
                {
                    $inc:{balance:-amount}//update
                },
                {session}
            )
            await this.findOneAndUpdate(
                {
                    userId:toUserId
                },
                {
                    $inc:{balance:+amount}
                },
                {session}
            )
        })
        return {success:true}
    }
    catch(error){
        return {success:false,error:error.message}
    }
    finally{
        await session.endSession();
    }
}

const Account = mongoose.model("Account", accountSchema);

export default Account;