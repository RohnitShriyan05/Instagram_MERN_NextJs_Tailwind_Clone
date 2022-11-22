This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



import {BsEye, BsEyeSlash} from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
export default function Login({setUser}){
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email,setEmail]=useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const registerHandle= ()=>{
        axios.post("http://localhost:4000/register",{email:email, username:username, password:password});
        setUser({username:username});
    };
    const signInHandle= ()=>{
        axios.post("http://localhost:4000/login",{username:username, password:password})
        .then(res=>alert(res));
    };
    const [visible, setVisible] = useState(false); 
    const [register, setRegister]= useState(false);
    return(
        <div className="h-screen w-full overflow-y-hidden">
            <div className="flex flex-col items-center justify-center h-screen drop-shadow text-center px-2vw py-2vh">
                <span className="logo vbigtext pr-2 cursor-pointer scale-150 py-1vh">Instagram</span>
                <p className="vsmalltext pb-4vh">by Rohnit Shriyan</p>
                <form>
                <input placeholder="Email" onChange={e=>setEmail(e.target.value)} className={register?"caret-metablue border rounded-sm px-1 smalltext":"hidden"}/><br/>
                <input placeholder="Username" className="caret-metablue border rounded-sm px-1 smalltext mt-2vh" onChange={e=>setUsername(e.target.value)}/><br/>
                <div className="relative mt-2vh">
                    <input type={visible? "text" :"password"} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="border rounded-sm px-1 smalltext caret-metablue"/>
                    {visible? <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEyeSlash className="text-neutral-600"/></div>: <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEye className="text-neutral-600"/></div>}
                </div>
                <div className={register?"relative mt-2vh":"hidden"}>
                    <input type={visible? "text" :"password"} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="border rounded-sm px-1 smalltext caret-metablue"/>
                    {visible? <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEyeSlash className="text-neutral-600"/></div>: <div onClick={()=>setVisible(!visible)} className="absolute right-2 top-0 h-full flex items-center cursor-pointer"><BsEye className="text-neutral-600"/></div>}
                </div>
                <p className={password !=confirmPassword && register ?"vsmalltext text-red-600":"hidden"}>Password do not match</p>
                <button type="submit" className="smalltext w-full mt-2vh mb-3vh border bg-metablue text-white" onClick={register? registerHandle: signInHandle}>{register? "Register": "Sign In"}</button>
                </form>
                <button className="vsmalltext w-full text-metablue w-max" onClick={()=>setRegister(!register)}>{register?"Sign In":"Create new account"}</button>
            </div>
        </div>
    );
}