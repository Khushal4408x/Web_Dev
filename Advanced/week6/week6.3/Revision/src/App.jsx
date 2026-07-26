import { useState ,useEffect} from 'react'


function App() {
  const [count, setCount] = useState(0)
  console.log("hi there");
  
  useEffect(function(){
    setTimeout(()=>{
    setCount(count+1);
  },2000)
  },[])

  return (
    <>
      {count}
    </>
  )
}

export default App
