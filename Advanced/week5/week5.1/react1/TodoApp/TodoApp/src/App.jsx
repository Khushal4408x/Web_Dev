
import { useState } from 'react'

function App() {
  //never update state variables directly user set func calls to avoid not triggering rerender
  const [todos, setTodos] = useState([{
 
    }])
  console.log("app got called")

  function addTodo() {
    // setTodos([...todos,{title:"newTodo",description:"desc of new todo"}])
    console.log('add todo got called')
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      newTodos.push(todos[i]);
    }
    newTodos.push({
      title: "adfads", description: "dfdfdfdf",
    })
    setTodos(newTodos)
  }
  
  return (
    <>
      <div>
        {/*  stringify todo array to render it (dumber way) */}
        {/* <Todo title={todos[0].title} description={todos[0].description} />
        <Todo title={todos[1].title} description={todos[1].description} /> */}

        <button onClick={addTodo} >Add a random todo</button>
        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}/>}
        )}
      </div>
    </>
  )
}

function Todo(props) {
  console.log('Todo got called')
  return (
    <div>
      <h2>
        {props.title}
      </h2>
      <p>{props.description}</p>
    </div>
  )
}

export default App
// anytime parent rerenders, all its children rerenders