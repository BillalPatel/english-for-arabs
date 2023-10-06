import Link from "next/link";
import Image from "next/image";

import iconImage from "../../assets/logo.jpeg";

export function Navbar() {
  return (
    <div className="menubar | flex justify-between py-7 px-12 w-full">
      <div className="logo-image">
        <Image
          src={iconImage}
          alt={""}
          className="logo | h-20 w-auto"
        />
      </div>
      <ul className="menubar-links | flex flex-row space-x-7 font-semibold text-black">
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/...">English speakers</Link>
        </li>
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/...">Arabic speakers</Link>
        </li>
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/about">About us</Link>
        </li>
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
