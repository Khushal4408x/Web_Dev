import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then(function (res) {
      setTodos(res.data.todos)
    })
  }, []);
  useEffect(() => {
     
   },[])
  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
    </>
  )
}
function Todo({ title,description
}) {
  return <div>
    <h3>{title}</h3>
  <h4>{description}</h4>
  </div>
}

export default App
