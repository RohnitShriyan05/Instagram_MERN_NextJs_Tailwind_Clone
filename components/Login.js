import axios from "axios";
import { useState } from "react";
export default function login(){
    const [registerPage, setRegisterPage] = useState(false);
    const handleRegistration = ()=>{
        
    }
    const handleSignIn = ()=>{

    }
    return(
        <div className="h-screen w-full flex flex-col items-center justify-center text-center drop-shadow">
            <p className="vbigtext logo">Instagram</p>
            <p className="vsmalltext">By Rohnit Shriyan</p>
            <form className="flex-col">
                <input placeholder="Username" className="smalltext mt-3vh px-1 border rounded-sm"/><br/>
                <input placeholder="Password" type="password" className="smalltext mt-1vh px-1 border rounded-sm"/><br/>
                <input placeholder="Confirm password" type="password" className={registerPage? "smalltext w-max mt-1vh px-1 border rounded-sm":"hidden"}/>
                <button onClick={registerPage? handleRegistration: handleSignIn} className="w-full bg-metablue text-white mt-1vh rounded-sm">{registerPage? "Register":"Sign In"}</button>
            </form>
            <button onClick={()=>setRegisterPage(!registerPage)} className="vsmalltext text-metablue pt-1vh">{registerPage? "Sign In":"Create new account"}</button>
        </div>
    );
}