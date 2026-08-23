import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{background:"red"}}>hi</div>
        <div style={{background:"green"}}>hi</div>
        <div style={{background:"blue"}}>hi</div>


      </div>
    </>
  )
}

export default App
