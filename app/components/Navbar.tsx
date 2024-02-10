"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import iconImage from "../../assets/logo.svg";
import desktopIconImage from "../../assets/logo-with-name.svg";
import openHamburgerMenuIcon from "../../assets/icons/icon-hamburger.svg";
import closeHamburgerMenuIcon from "../../assets/icons/icon-close.svg";

export default function Navbar() {
  const [isHamburgerMenuClosed, setIsHamburgerMenuClosed] = useState(false);

  function closeHamburgerMenu() {
    setIsHamburgerMenuClosed(true);
  }

  return (
    // <nav className="navbar | flex justify-between py-4 md:py-7 lg:py-3 md:px-20 lg:px-20 w-full bg-opacity-0">
    <nav className="navbar | absolute flex justify-between py-4 md:py-7 lg:py-3 md:px-20 lg:px-20 w-full bg-none opacity-100 z-50">
      <div className="logo-image">
        <Image
          src={iconImage}
          alt={""}
          className="logo | h-16 md:hidden lg:hidden w-auto"
        />
        <Image
          src={desktopIconImage}
          alt={""}
          className="desktop-logo | hidden md:flex h-24 lg:h-14 w-auto"
        />
      </div>
      <Image
        src={openHamburgerMenuIcon}
        alt="Hamburger menu icon"
        className="hamburger-menu-icon | px-5 h-5 w-auto flex self-center md:hidden lg:hidden"
      />
      <ul className="menubar-links | hidden md:flex lg:flex md:flex-row lg:flex-row md:self-center lg:self-center space-x-7 font-semibold text-black">
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="#why-study">Aal-Imran</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="#teachers">Our teachers</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="#courses">Courses</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="#prices">Prices</Link>
        </li>
        <li className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="#contact">Contact us</Link>
        </li>
      </ul>
      {isHamburgerMenuClosed && (
        <>
          <div
            className="hamburger-menu | h-full w-3/12 absolute z-50 top-0 left-0 md:hidden lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(254, 252, 247, 0.75) 0%, #F4F4F4 100%);",
            }}
          ></div>
          <div className="hamburger-menu | h-full w-9/12 bg-lightGold absolute z-50 top-0 right-0 md:hidden lg:hidden">
            <div>
              <Image
                onClick={closeHamburgerMenu}
                src={closeHamburgerMenuIcon}
                alt="Close hamburger menu icon"
                className="close-hamburger-menu-icon | px-5 h-5 w-auto flex self-center md:hidden lg:hidden"
              />
            </div>
            <ul>
              <li className="">English Speakers</li>
              <li className="">Arabic Speakers</li>
              <li className="">About Us</li>
              <li className="">Contact Us</li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
