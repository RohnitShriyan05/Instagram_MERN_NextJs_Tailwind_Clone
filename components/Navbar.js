import { BiHomeAlt, BiSearch, BiHeart} from "react-icons/bi";
import {RiAddCircleFill} from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();

  return (
    <ul className="w-full flex items-center justify-center py-1vh border-t">
      <li>
        <Link href="/">
          {router.asPath === "/" ? (
            <BiHomeAlt className="mediumtext text-black mr-10vw cursor-pointer" />
          ) : (
            <BiHomeAlt className="mediumtext text-neutral-500 mr-10vw cursor-pointer hover:text-black" />
          )}
        </Link>
      </li>

      <li>
        <Link href="/Explore">
          {router.asPath === "/Explore" ? (
            <BiSearch className="mediumtext text-black cursor-pointer mr-10vw" />
          ) : (
            <BiSearch className="mediumtext text-neutral-500  cursor-pointer mr-10vw hover:text-black" />
          )}
        </Link>
      </li>

      <li>
        <Link href="/CreatePost">
          {router.asPath === "/CreatePost" ? (
            <RiAddCircleFill className="mediumtext text-black mr-10vw cursor-pointer" />
          ) : (
            <RiAddCircleFill className="mediumtext text-neutral-500 mr-10vw cursor-pointer hover:text-black" />
          )}
        </Link>
      </li>
      
      <li>
        <Link href="/Notification">
          {router.asPath === "/Notification" ? (
            <BiHeart className="mediumtext text-black cursor-pointer" />
          ) : (
            <BiHeart className="mediumtext text-neutral-500 cursor-pointer hover:text-black" />
          )}
        </Link>
      </li>
    </ul>
  );
}
