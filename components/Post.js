import {CgProfile} from "react-icons/cg";
import {BsThreeDots} from "react-icons/bs";
import {BiHeart} from "react-icons/bi";
import {FiMessageCircle} from "react-icons/fi";
import {RiShareForward2Line} from "react-icons/ri";
export default function Post(){
    return(
        <div className="h-max w-full lg:px-30vw md:px-20vw px-0 bg-white flex flex-col">
            <div className="flex items-center px-1vw border-y border-x-2 py-1vh">
                <p className="pr-2"><CgProfile className="smalltext"/></p>
                <p className="smalltext flex-1">Rohnit Shriyan</p>
                <p><BsThreeDots/></p>
            </div>
            <img src="https://images8.alphacoders.com/712/712496.jpg"/>
            <div className="w-full grid grid-cols-3 place-items-center px-1vw pt-2 pb-1 border-x-2">
                <p><BiHeart/></p>
                <p><FiMessageCircle/></p>
                <p><RiShareForward2Line/></p>
            </div>
            <p className="smalltext font-bold py-1vh px-1vw text-justify border-2">rohnitshriyan <span className="smalltext font-normal">Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and</span></p>
        </div>
    )
}