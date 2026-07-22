const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());

const todos = [
  {
    id: 1,
    title: "Go to Gym",
    description: "Workout for 1 hour"
  },
  {
    id: 2,
    title: "Study DSA",
    description: "Solve 3 LeetCode problems"
  },
  {
    id: 3,
    title: "Learn React",
    description: "Study useEffect hook"
  }
];
app.get("/todos/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id == id);

  res.json(todo)
})

app.listen(3000, () => {
    console.log ("funct running")
})