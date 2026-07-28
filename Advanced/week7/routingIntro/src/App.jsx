import { useState ,lazy } from 'react'
import{BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
 const  Landing  =lazy(()=>import ('./components/Landing')) 
const Dashboard = lazy(()=>import ('./components/Dashboard')) 
function App() {
  
//Suspense Api is used for async compo fetching
  return (
    <div>
      
      <BrowserRouter>
      <Appbar/>
    
      <Routes>
        <Route path='/dashboard' element ={<Dashboard/>} />
         <Route path='/' element ={<Landing/>} />

      </Routes>
  </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate=useNavigate();
  return <div>
    <button onClick={()=>{
       navigate("/dashboard")
      }}>Dashb</button>
      <button onClick={()=>{
        navigate("/")
      }}>landing</button>
  </div>
}

export default App
