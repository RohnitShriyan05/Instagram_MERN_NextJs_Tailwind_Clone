import { CgProfile } from "react-icons/cg";

export default function Profile() {
  return (
    <div className="h-full lg:px-30vw md:px-20vw px-2vw flex flex-col items-center py-1vh">
      <div className="flex items-start">
        <div className="flex flex-col items-center justify-center">
          <CgProfile className="text-7xl" />
          <p className="font-bold">@rohnitshriyan</p>
        </div>
        <div className="grid grid-cols-3 place-items-center w-full pt-2vh">
          <div className="flex flex-col items-center">
            <p className="smalltext">100k</p>
            <p className="smalltext">Followers</p>
          </div>
          <div className="flex flex-col items-center px-10vw">
            <p className="smalltext">100k</p>
            <p className="smalltext">Post</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="smalltext">100k</p>
            <p className="smalltext">Following</p>
          </div>
        </div>
      </div>
      <p className="text-start w-full smalltext pb-2vh">Hello there I am using Instagram</p>
      <div className="border flex-1 w-full"></div>
    </div>
  );
}
