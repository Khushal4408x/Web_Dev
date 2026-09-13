// import { lazy } from "react" will implement later
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Heading from "./components/heading.jsx"
import SubHeading from "./components/subHeading.jsx"
import Input from "./components/input.jsx"
import Mybutton from "./components/button.jsx"
import Signin from "./pages/signin.jsx"
import Signup from "./pages/signup.jsx"
import Dashboard from "./pages/dashboard.jsx"
import SendMoney from "./pages/sendMoney.jsx"
import Appbar from "./components/appbar.jsx"


  function App() {

    return (
      <BrowserRouter>
      <Appbar></Appbar>
        <Routes>
          <Route path="/signin" element={<Signin></Signin>}/>

          <Route path="/signup" element={<Signup></Signup>}/>

          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          
          <Route path="/sendmoney" element={<SendMoney></SendMoney>}/>
        </Routes>
      </BrowserRouter>


    )
  }


export default App
