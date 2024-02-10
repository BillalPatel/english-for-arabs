"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import iconImage from "../../assets/logo.svg";
import desktopIconImage from "../../assets/logo-with-name.svg";
import openHamburgerMenuIcon from "../../assets/icons/icon-hamburger.svg";
import closeHamburgerMenuIcon from "../../assets/icons/icon-close.svg";

// export default function Navbar() {
//   const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

//   function openHamburgerMenu() {
//     setIsHamburgerMenuOpen(true);
//   }

//   function closeHamburgerMenu() {
//     setIsHamburgerMenuOpen(false);
//   }

//   return (
//     // <nav className="navbar | flex justify-between py-4 md:py-7 lg:py-3 md:px-20 lg:px-20 w-full bg-opacity-0">
//     <nav className="navbar | fixed lg:absolute flex justify-between md:py-7 lg:py-3 md:px-20 lg:px-20 w-full bg-none opacity-100 z-50">
//       <div className="logo-image">
//         <Image
//           src={iconImage}
//           alt={"Logo"}
//           className="logo | h-16 md:hidden lg:hidden w-auto"
//         />
//         <Image
//           src={desktopIconImage}
//           alt={"Logo"}
//           className="desktop-logo | hidden md:flex h-24 lg:h-14 w-auto"
//         />
//       </div>
//       <Image
//         src={openHamburgerMenuIcon}
//         alt="Hamburger menu icon"
//         className="hamburger-menu-icon | z-50 px-5 h-4 w-auto flex self-center md:hidden lg:hidden cursor-pointer"
//         onClick={openHamburgerMenu}
//       />
//       <ul className="menubar-links | hidden md:flex lg:flex md:flex-row lg:flex-row md:self-center lg:self-center space-x-7 font-semibold text-black">
//         <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
//           <Link href="#why-study">Aal-Imran</Link>
//         </li>
//         <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
//           <Link href="#teachers">Our Teachers</Link>
//         </li>
//         <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
//           <Link href="#courses">Courses</Link>
//         </li>
//         <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
//           <Link href="#prices">Prices</Link>
//         </li>
//         <li className="relative text-sm w-fit block border-2 rounded px-2 py-2 place-self-center cursor-pointer hover:bg-blue hover:border-blue hover:text-white duration-100">
//           <Link href="#contact">Contact Us</Link>
//         </li>
//       </ul>
//       {isHamburgerMenuOpen && (
//         <menu className="menu fixed top-0 left-0 w-full h-full bg-darkGrey flex justify-center items-center z-50">
//           <Image
//             src={closeHamburgerMenuIcon}
//             alt="Close hamburger menu icon"
//             className="hamburger-menu-icon | z-50 h-4 w-auto flex self-center md:hidden lg:hidden cursor-pointer absolute top-10 right-5"
//             onClick={closeHamburgerMenu}
//           />
//           <ul className="text-center text-white space-y-3">
//             <li>
//               <a
//                 href="#why-study"
//                 className="block text-2xl hover:cursor-pointer"
//               >
//                 Aal-Imran
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#teachers"
//                 className="block text-2xl hover:cursor-pointer"
//               >
//                 Our Teachers
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#courses"
//                 className="block text-2xl hover:cursor-pointer"
//               >
//                 Courses
//               </a>
//             </li>
//             <li>
//               <a href="#prices" className="block text-2xl hover:cursor-pointer">
//                 Prices
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="block text-2xl hover:cursor-pointer"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </menu>
//       )}
//     </nav>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import openHamburgerMenuIcon from '../../assets/icons/icon-hamburger.svg';
// import closeHamburgerMenuIcon from '../../assets/icons/icon-close.svg';

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 100; // Change this value according to your preference
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openHamburgerMenu() {
    setIsHamburgerMenuOpen(true);
  }

  function closeHamburgerMenu() {
    setIsHamburgerMenuOpen(false);
  }

  return (
    <nav
      className={`navbar | fixed lg:absolute flex justify-between md:py-7 lg:py-3 md:px-20 lg:px-20 w-full ${
        isScrolled ? "bg-lightGrey" : "bg-none"
      } opacity-100 z-50`}
    >
      <div className="logo-image">
        <Image
          src={iconImage}
          alt={"Logo"}
          className="logo | h-16 md:hidden lg:hidden w-auto"
        />
        <Image
          src={desktopIconImage}
          alt={"Logo"}
          className="desktop-logo | hidden md:flex h-24 lg:h-14 w-auto"
        />
      </div>
      <Image
        src={openHamburgerMenuIcon}
        alt="Hamburger menu icon"
        className="hamburger-menu-icon | z-50 px-5 h-4 w-auto flex self-center md:hidden lg:hidden cursor-pointer"
        onClick={openHamburgerMenu}
      />
      <ul className="menubar-links | hidden md:flex lg:flex md:flex-row lg:flex-row md:self-center lg:self-center space-x-7 font-semibold text-black">
        <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#why-study">Aal-Imran</Link>
        </li>
        <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#teachers">Our Teachers</Link>
        </li>
        <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#courses">Courses</Link>
        </li>
        <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#prices">Prices</Link>
        </li>
        <li className="relative text-sm w-fit block border-2 rounded px-2 py-2 place-self-center cursor-pointer hover:bg-blue hover:border-blue hover:text-white duration-100">
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>
      {isHamburgerMenuOpen && (
        <menu className="menu fixed top-0 left-0 w-full h-full bg-darkGrey flex justify-center items-center z-50">
          <Image
            src={closeHamburgerMenuIcon}
            alt="Close hamburger menu icon"
            className="hamburger-menu-icon | z-50 h-4 w-auto flex self-center md:hidden lg:hidden cursor-pointer absolute top-6 right-5"
            onClick={closeHamburgerMenu}
          />
          <ul className="text-center text-white space-y-3">
            <li>
              <a
                href="#why-study"
                className="block text-2xl hover:cursor-pointer"
              >
                Aal-Imran
              </a>
            </li>
            <li>
              <a
                href="#teachers"
                className="block text-2xl hover:cursor-pointer"
              >
                Our Teachers
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block text-2xl hover:cursor-pointer"
              >
                Courses
              </a>
            </li>
            <li>
              <a href="#prices" className="block text-2xl hover:cursor-pointer">
                Prices
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-2xl hover:cursor-pointer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </menu>
      )}
    </nav>
  );
};

export default Navbar;
