import Link from "next/link";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
export default function Header() {
    const router = useRouter();
  return (
    <div className="w-full px-2vw pt-1vh border-b flex items-center">
      <Link href="/">
        <p className="flex-1 vsmalltext"><span className="logo bigtext pr-2 cursor-pointer">Instagram</span>by Rohnit Shriyan</p>
      </Link>
      <Link href="/Profile">
        <CgProfile className={`bigtext cursor-pointer ${router.asPath==="/Profile" ? "hidden": "block"}`} />
      </Link>
    </div>
  );
}
