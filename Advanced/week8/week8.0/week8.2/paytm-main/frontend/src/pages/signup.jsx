import Heading from "../components/heading";
import SubHeading from "../components/subHeading";
import Input from "../components/input";
import Mybutton from "../components/button";
import BottomWarning from "../components/bottomWarn";


export default function Signup(){
    return <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 px-4 ">
                    <Heading heading={"Sign up"}></Heading>
                    <SubHeading subhead={"Enter your credentials to access your account"}></SubHeading>
                    <Input label={"First Name"} type ={"Password"}  ></Input>
                    <Input label={"Last Name"} type ={"Password"}  ></Input>

                    <Input  label={"Email"} type={"Email"} placeholder={"abc@gmail.com"}></Input>
                    <Input label={"Password"} type ={"Password"}  ></Input>
                    

                    <div>
                        <Mybutton  label={"Sign in"}></Mybutton>
                    </div>
                    <BottomWarning label={"Already have an account, "} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
                </div>

            </div>
    </div>
}