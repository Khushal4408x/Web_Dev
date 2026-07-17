import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    desciption: "Go to gym for an hr",
    completed:false
  }, {
    title: "Study DsA",
    desciption: "Study for an hr",
    completed: false
  }])

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
