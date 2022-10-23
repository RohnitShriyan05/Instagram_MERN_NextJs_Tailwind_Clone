import { provider, auth } from "../firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default function Login({setUser}){
    const SignIn= ()=>{
        auth.onAuthStateChanged((newUser)=>{
            newUser?
                setUser({
                    id: newUser.uid,
                    email: newUser.email,
                    name: newUser.displayName
                })
                : auth.signInWithPopup(provider).then((res)=>
                setUser({
                    id: res.user.uid,
                    email: res.user.email,
                    name: res.user.displayName
                })).catch((err)=>alert(err.message));
        })
    }    
    return(
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <span className="logo bigtext pr-2 cursor-pointer scale-150 py-1vh">Instagram</span>
            <p className="vsmalltext pb-2vh">by Rohnit Shriyan</p>
            <button onClick={SignIn} className="border-2 border-gray-500 hover:border-black py-1 px-2vw rounded-sm">Sign In</button>
        </div>
    );
}