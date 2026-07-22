import { useEffect, useState } from 'react'


function App() {
  
    const [todos,setTodos]=useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      
    })
    },1000)
  }, [])
  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    
    <Card>
      Hi from child
    </Card>
  </div> 
}

function Card({children}) {
  return (
    <div style={{ border:"12px solid black"}}>
      {children}
    </div>
  )
}

function Todo({ title, description }) {
  return <div>
    <h4>
      {title}
    </h4>
    <h4>
      {description}
    </h4>
  </div>
}
export default App
