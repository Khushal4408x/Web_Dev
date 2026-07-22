import { useMemo } from 'react';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1);
  let count = useMemo(() => {
    let finalCnt = 0;
    for (let i = 1; i <= inputValue; i++){
      finalCnt=finalCnt+i
    }
  })
  return (
    <>
      <input onChange={function (e) {
        setInputValue( e.target.value );
      }}></input>
      <p>Sum is {count}</p>
      <button onClick={()=>{setCount(count+1)}}> Counter { count}</button>
    </>
  )
}

export default App
