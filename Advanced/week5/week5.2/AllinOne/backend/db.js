const mongoose = require("mongoose");
const { type } = require("node:os");
const { boolean } = require("zod");
mongoose.connect("").then(console.log("db connected"))
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: boolean,
        default:false
    }
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}