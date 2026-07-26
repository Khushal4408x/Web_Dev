import { useMemo } from 'react';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1);
  //We can also do it by useEffect also but it will use extra state var. it will also use 2 rerenders
  //but there is no strict practical reason to use one over the other 
  let counts = useMemo(() => {
    let finalCnt = 0;
    for (let i = 1; i <= parseInt(inputValue); i++){
      finalCnt=finalCnt+i
    }
    return finalCnt
  },[inputValue])
  return (
    <>
      <input onChange={function (e) {
        setInputValue( e.target.value );
      }}></input>
      <p>Sum is {counts}</p>
      <button onClick={()=>{setCount(count+1)}}> Counter { count}</button>
    </>
  )
}

export default App
