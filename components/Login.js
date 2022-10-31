import {BsEye, BsEyeSlash} from "react-icons/bs";
import { useState, useRef } from "react";
export default function Login({setUser}){  
    const [visible, setVisible] = useState(false); 
    const ref = useRef(null);
    const [register, setRegister]= useState(false);
    return(
        <div className="h-screen w-full overflow-y-hidden">
            <div className="flex flex-col items-center justify-center h-screen drop-shadow text-center px-2vw py-2vh">
                <span className="logo vbigtext pr-2 cursor-pointer scale-150 py-1vh">Instagram</span>
                <p className="vsmalltext pb-4vh">by Rohnit Shriyan</p>
                <form>
                <input placeholder="Email" className={register?"caret-metablue border rounded-sm px-1 smalltext":"hidden"}></input><br/>
                <input placeholder="Username" className="caret-metablue border rounded-sm px-1 smalltext mt-2vh"></input><br/>
                <div className="relative mt-2vh">
                    <input type={visible? "text" :"password"} placeholder="Password" className="border rounded-sm px-1 smalltext caret-metablue"/>
                    {visible? <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEyeSlash className="text-neutral-600"/></div>: <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEye className="text-neutral-600"/></div>}
                </div>
                <div className={register?"relative mt-2vh":"hidden"}>
                    <input type={visible? "text" :"password"} placeholder="Confirm Password" className="border rounded-sm px-1 smalltext caret-metablue"/>
                    {visible? <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEyeSlash className="text-neutral-600"/></div>: <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEye className="text-neutral-600"/></div>}
                </div>
                <button type="submit" className="smalltext w-full mt-2vh mb-3vh border bg-metablue text-white">{register? "Register": "Sign In"}</button>
                </form>
                <button className="vsmalltext w-full text-metablue w-max" onClick={()=>setRegister(!register)}>{register?"Sign In":"Create new account"}</button>
            </div>
        </div>
    );
}