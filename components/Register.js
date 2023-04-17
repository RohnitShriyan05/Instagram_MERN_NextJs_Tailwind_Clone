
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Register = (setRegister) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="bg-white border border-neutral-300 flex flex-col items-center justify-center bg-primaryDark py-4vh rounded-lg drop-shadow-2xl">
        <h1 className="text-5xl pb-2 logo">Instagram</h1>
        <form className="py-2vh px-2vw">
          <div className="flex items-center flex-col w-full ">
            <label className="text-sm pb-2 w-full font-semibold">
              EMAIL<span className="text-red-600 text-xs">*</span>
            </label>
            <input
              type="text"
              name="USERNAME"
              className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-400 rounded-lg"
            ></input>
          </div>
          <div className="flex items-center flex-col w-full pt-1vh">
            <label className="text-sm pb-2 w-full font-semibold">
              PASSWORD<span className="text-red-600 text-xs">*</span>
            </label>
            <input
              type="password"
              name="PASSWORD"
              className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-400 rounded-lg"
            ></input>
          </div>
          <div className="flex items-center flex-col w-full pt-1vh pb-2vh">
            <label className="text-sm pb-2 w-full font-semibold">
              CONFIRM PASSWORD<span className="text-red-600 text-xs">*</span>
            </label>
            <input
              type="password"
              name="PASSWORD"
              className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-400 rounded-lg"
            ></input>
          </div>
          <button className="bg-sky-500 text-white rounded-lg w-full h-10">Register</button>
          <div className="text-xs py-2vh flex">
            Already have an account?{" "}
            <button onClick={(e)=>{setRegister(false); e.preventDefault();}}>
              <p className="text-sky-500 text-xs ml-1">Sign In</p>
            </button>
          </div>
          <p className="w-full text-center py-2vh">OR</p>
          <button className="flex items-center w-full h-10 justify-center">
            <FcGoogle className="mr-2 text-2xl" /> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
