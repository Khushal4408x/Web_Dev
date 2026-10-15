import Heading from "../components/heading";
import SubHeading from "../components/subHeading";
import Input from "../components/input";
import Mybutton from "../components/button";
import BottomWarning from "../components/bottomWarn";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signin(){
    const [email,setEmail]=useState("")
    const [passwd,setPasswd]=useState("")
    const navigate= useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 px-4 ">
                    <Heading heading={"Sign in"}></Heading>
                    <SubHeading subhead={"Enter your credentials to access your account"}></SubHeading>
                    <Input onChange={(e)=>{
                        setEmail(e.target.value);
                    }}  label={"Email"} type={"Email"} placeholder={"abc@gmail.com"}></Input>
                    <Input onChange={(e)=>{
                        setPasswd(e.target.value);
                    }} label={"Password"} type ={"Password"}  ></Input>
                    <div>
                        <Mybutton  onClick={async ()=>{
                           const response= await axios.post("http://localhost:3000/api/v1/user/signin",{
                                username:email,
                                password:passwd,
                            })
                            localStorage.setItem("token",response.data.token)
                            if(response.status===200){
                                navigate("/dashboard")
                            }
                            console.log (response)
                        }}  label={"Sign in"}></Mybutton>
                    </div>
                    <BottomWarning label={"Don't have an account, "} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
                </div>

            </div>
    </div>
}