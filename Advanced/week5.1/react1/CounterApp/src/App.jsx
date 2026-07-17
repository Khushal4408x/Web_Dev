
import { useState } from 'react'
 
   function App() {
     const [count, setCount] = useState(0);
    //  console.log(count);
    //  console.log(setCount)
    

  return (
    <div>
      <CustomButton count={count+1} setCount={setCount}></CustomButton>
    </div>
  )
   }
function CustomButton(props) {
  function onClickHandler() {
       //  count++;not correct way 
       props.setCount(props.count+1)
  }
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
