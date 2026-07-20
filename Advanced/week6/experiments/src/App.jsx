import { useState } from 'react'
import React from 'react';

function App() {
  const [title, setTitle] = useState("hhhhi")

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
      <Header title='k2'></Header>
      <Header title="k3"></Header>
      <Header title="k3"></Header>
    </>

  )
  
}
const Header=React.memo(function Header({ title }) {
   
    return <div>
      {console.log("hiiii")}
      {title}
    </div>
  })
export default App
