import Link from "next/link";
import Image from "next/image";

import iconImage from "../../assets/logo.svg";
import desktopIconImage from "../../assets/logo-with-name.svg";
import openHamburgerMenuIcon from "../../assets/icon-hamburger.svg";
import closeHamburgerMenuIcon from "../../assets/icon-close.svg";

export function Navbar() {
  return (
    <div className="menubar | flex justify-between py-4 md:py-7 lg:py-3 md:px-20 lg:px-20 w-full">
      <div className="logo-image">
        <Image
          src={iconImage}
          alt={""}
          className="logo | h-16 md:hidden lg:hidden w-auto"
        />
        <Image
          src={desktopIconImage}
          alt={""}
          className="desktop-logo | hidden md:flex h-24 lg:h-24 w-auto"
        />
      </div>
      <Image
        src={openHamburgerMenuIcon}
        alt="Hamburger menu icon"
        className="hamburger-menu-icon | px-5 h-5 w-auto flex self-center md:hidden lg:hidden"
      />
      <ul className="menubar-links | hidden md:flex lg:flex md:flex-row lg:flex-row md:self-center lg:self-center space-x-7 font-semibold text-black">
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/...">English speakers</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/...">Arabic speakers</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/about">About us</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
