import { useContext, useState } from 'react'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'


function App() {
 
  return (
    <div>
     <RecoilRoot>
       <Count/>
     </RecoilRoot>
    </div>
  )
}

function Count (){
  return <div>
    <CountRenderer/>
    <Buttons  />
    <EvenOdd/>
  </div>
}

function CountRenderer(){
  const count =useRecoilValue(countAtom);
  
  // const [count,setCount]=useRecoilState(countAtom) it ll work but unoptimal so jitta jaroorat ho utna hi use karo
  return <div>
    {count}
  </div>
}
function Buttons(){
  
 const setCount=useSetRecoilState(countAtom)
  return <div>
      <button onClick={()=>{setCount(count=>count+1)}}>increase</button>
      <button onClick={()=>{setCount(count =>count-1)}}>decrease</button>
  </div>
}
function EvenOdd(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {(isEven)?"Its even":null}
  </div>
}

export default App
