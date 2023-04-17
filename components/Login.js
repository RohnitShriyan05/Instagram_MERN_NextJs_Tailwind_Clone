import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithCredential } from "firebase/auth";
export function Login({setUser, setRegister}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const GoogleSignIn = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setUser({
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            profilepic: firebaseUser.photoURL,
          });
        } else {
          auth
            .signInWithPopup(provider)
            .then((res) => {
              setUser({
                name: res.user.displayName,
                email: res.user.email,
                profilepic: res.user.photoURL,
              });
            })
            .catch((error) => alert(error.message));
        }
      });
  };
  const UsernameSignIn = (e) => {
    e.preventDefault();
    signInWithCredential(auth, username, password)
      .then((userCredential) => {
        // Signed in
        setUser({ userCredential });
        console.log(user);
      })
      .catch((error) => {
        alert("invalid username or password, please try again");
      });
  };
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-4vh rounded-lg drop-shadow-2xl bg-white border border-neutral-200">
        <h1 className="text-5xl pb-2 logo">Instagram</h1>
        <form className="py-2vh px-2vw">
          <div className="flex items-center flex-col w-full ">
            <label className="text-sm pb-2 w-full font-semibold">
              USERNAME<span className="text-red-600 text-xs">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="USERNAME"
              className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-400 rounded-md"
            />
          </div>
          <div className="flex items-center flex-col w-full pt-1vh pb-2vh">
            <label className="text-sm pb-2 w-full font-semibold">
              PASSWORD<span className="text-red-600 text-xs">*</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="PASSWORD"
              className="w-full mx-3vw text-lg h-10 px-2 border border-neutral-400 rounded-md"
            />
          </div>
          <button
            onClick={UsernameSignIn}
            className="w-full h-10 bg-sky-500 text-white rounded-lg"
          >
            Sign In
          </button>
          <div className="text-xs py-2vh flex">
            Dont have an account yet?{" "}
            <button onClick={(e)=>{setRegister(false); e.preventDefault();}}>
              <p className="text-sky-500 text-xs pl-1 cursor-pointer">Register</p>
            </button>
          </div>
          <p className="w-full text-center text-sm py-2vh">OR</p>
          <button
            className="flex items-center w-full h-10 justify-center"
            onClick={GoogleSignIn}
          >
            <FcGoogle className="mr-2 text-xl" /> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
