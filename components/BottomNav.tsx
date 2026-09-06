"use client";
import Homeicon from "./icons/Homeicon";
import Staricon from "./icons/Staricon";
import Scanicon from "./icons/Scanicon";
import Navicon from "./icons/Navicon";
import Hearticon from "./icons/Hearticon";
import Link from "next/link"
import { usePathname } from "next/navigation"; 

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="fixed bottom-0 left-0 flex py-3 rounded-t-4xl border-t-3 border-[#45454511] w-full">
      <nav>
        <ul className="flex *:flex  *:justify-center *:flex-col *:items-center w-screen justify-evenly font-bold text-xs text-[#4d4d4dd7]">
          <li className={pathname === "/" ? "underline decoration-4 decoration-[#33cc80] decoration-dotted" : "text-[#4d4d4dd7]"}>
            <Link href="/" className="flex flex-col items-center">
              <Homeicon className="w-5 h-5 m-1 fill-[#4d4d4d]" />
              Home
            </Link>
          </li>
          <li className={pathname === "/reviews" ? "underline decoration-4 decoration-[#33cc80] decoration-dotted" : "text-[#4d4d4dd7]"}>
            <Link href="/reviews" className="flex flex-col items-center">
              <Staricon className="w-5 h-5 m-1 fill-[#4d4d4d]" />
              Reviews
            </Link>
          </li>
          <li className="rounded-full -translate-y-4 w-5 h-5">
            <button className="p-3 rounded-full  bg-linear-135 from-[#33cc80] to-[#66ccff] shadow-lg inset-shadow-sm inset-shadow shadow-[#33cc8055]">
              <Scanicon className="w-10 h-10 stroke-[#fafafa] opacity-80" />
            </button>
          </li>
          <li className={pathname === "/navigation" ? "underline decoration-4 decoration-[#33cc80] decoration-dotted" : "text-[#4d4d4dd7]"}>
            <Link href="/navigation" className="flex flex-col items-center">
              <Navicon className="w-5 h-5 m-1 fill-[#4d4d4d]" />
              Navigation
            </Link>
          </li>
          <li className={pathname === "/favorites" ? "underline decoration-4 decoration-[#33cc80] decoration-dotted" : "text-[#4d4d4dd7]"}>
            <Link href="/favorites" className="flex flex-col items-center">
              <Hearticon className="w-5 h-5 m-1 fill-[#4d4d4d]" />
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}