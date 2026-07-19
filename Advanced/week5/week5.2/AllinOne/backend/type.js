const { title } = require("node:process")
const zod = require("zod")
const { describe } = require("zod/v4/core")
// {
//     title: string,
//         description:string,
// }

// {
//     id:string
// }
const createTodo = zod.object({
    title: zod.string(),
    description:zod.string()
})
const updateTodo = zod.object({
    id:zod.string()
})
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}