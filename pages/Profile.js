import { CgProfile } from "react-icons/cg";
import {MdOutlineEdit} from "react-icons/md";
export default function Profile({user}) {
  const EditBio= ()=>{
    const newBio = prompt("Enter new bio here");

  }
  return (
    <div className="flex-1 lg:px-30vw md:px-20vw px-2vw flex flex-col items-center py-1vh overflow-y-scroll">
      <div className="w-full flex flex-col items-center justify-center">
        <img src="https://images8.alphacoders.com/712/712496.jpg" className="border border-black object-cover h-24 aspect-square rounded-full"/>
        <p className="font-bold">{user.username}</p>
        <p className="smalltext pb-2vh">Hello there I am using Instagram</p>
      </div>
      <div className="flex items-start">
        <div className="grid grid-cols-2 place-items-center w-full pt-2vh">
          <div className="flex flex-col items-center">
            <p className="smalltext">100k</p>
            <p className="smalltext">Friends</p>
          </div>
          <div className="flex flex-col items-center px-10vw">
            <p className="smalltext">100k</p>
            <p className="smalltext">Post</p>
          </div>
        </div>
      </div>
      <button onClick={EditBio} className="w-full smalltext border-2 rounded-sm my-1vh flex items-center justify-center"><MdOutlineEdit className="mx-2"/>Edit Bio</button>
      <div className="flex-1 w-full grid grid place-items-start  auto-rows-min grid-cols-3 gap-1">
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        <img className="object-cover aspect-square" src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"/>
        <img className="object-cover aspect-square" src="https://images8.alphacoders.com/712/712496.jpg"/>
        
      </div>
    </div>
  );
}
