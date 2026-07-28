import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count ={count} setCount={setCount}/>
      
    </div>
  )
}
function Count({count,setCount}){
  return <div>
    {count} 
    <Button count={count} setCount={setCount} />
  </div>
}
function Button({count,setCount}){
  return <div>
    <button onClick={()=>{

    }}>INc</button>
    <button onClick={()=>{

    }}>Dec</button>
  </div>
}
export default App
