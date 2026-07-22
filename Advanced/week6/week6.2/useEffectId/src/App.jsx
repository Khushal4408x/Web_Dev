import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [currTodo, setcurrTodo] = useState(1)
  return (
    <>
      <button onClick={() => {
        setcurrTodo(1)
      }
      }>1</button>
      <button onClick={()=>{setcurrTodo(2)}}>2</button>
      <button onClick={()=>{setcurrTodo(3)}}>3</button>
      
      <Todo id={currTodo}/>
    </>
  )
}

function Todo({ id }) {
  const [todo, setTodos] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/todos/"+id)
      .then(function (res) {
       return res.json()
      })
      .then(function (data) {
          console.log(data)
        setTodos(data)
      })
    
  }, [id])
  return (<div>
    <h4>{todo.title}</h4>
    <h5>{todo.description}</h5>
  </div>)
}

export default App
