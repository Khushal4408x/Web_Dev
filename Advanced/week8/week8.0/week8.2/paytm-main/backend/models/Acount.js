import mongoose from "mongoose";
import User from "./User.js";
import { validate } from "zod";
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
            message: "User does not exists"
        }
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        get: v => (v / 100),//auto convert on read
        set: v => Number.isInteger(v) ? v : Math.round(v * 100) //auto convert on write
    }
});

accountSchema.statics.transfer = async function (fromUserId, toUserId, amountRupees){
    const  amount=Math.round(amountRupees*100);//converted to paise

    const session = await this.db.startSession();
    try{
        await  session
    }
    catch(error){

    }
}

const Account = mongoose.model("Account", accountSchema);

export default Account;