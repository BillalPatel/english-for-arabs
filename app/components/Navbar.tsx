"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import openHamburgerMenuIcon from "../../assets/icons/icon-hamburger.svg";
import closeHamburgerMenuIcon from "../../assets/icons/icon-close.svg";

export default function Navbar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 100;
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
      className={`navbar | fixed md:absolute lg:absolute flex justify-between md:py-2 lg:py-3 md:px-20 lg:px-20 w-full ${
        isScrolled ? "bg-lightGrey" : "bg-none"
      } opacity-100 z-50`}
    >
      <div className="logo-image">
        <Image
          src={logo}
          alt={"Logo"}
          height={1000}
          width={1000}
          className="logo | flex p-2 md:p-0 lg:p-0 md:flex h-16 lg:h-20 w-auto"
        />
      </div>
      <Image
        src={openHamburgerMenuIcon}
        alt="Hamburger menu icon"
        height={1000}
        width={1000}
        className="hamburger-menu-icon | z-50 px-5 h-4 w-auto flex self-center md:hidden lg:hidden cursor-pointer"
        onClick={openHamburgerMenu}
      />
      <ul className="menubar-links | hidden md:flex lg:flex md:flex-row lg:flex-row md:self-center lg:self-center md:space-x-6 lg:space-x-7 font-semibold text-white">
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#why-study">Aal-Imran</Link>
        </li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#teachers">Our Teachers</Link>
        </li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#courses">Courses</Link>
        </li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brown after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center place-self-center">
          <Link href="#prices">Prices</Link>
        </li>
        <Link
          href="#contact"
          className="relative w-fit block border-2 rounded px-2 md:py-1 py-2 place-self-center cursor-pointer hover:bg-none hover:border-brown hover:text-brown duration-100"
        >
          <p>Contact Us</p>
        </Link>
      </ul>
      {isHamburgerMenuOpen && (
        <menu className="menu | fixed top-0 left-0 w-full h-full bg-darkGrey flex justify-center items-center z-50">
          <Image
            src={closeHamburgerMenuIcon}
            alt="Close hamburger menu icon"
            height={1000}
            width={1000}
            className="hamburger-menu-icon | z-50 h-4 w-auto flex self-center md:hidden lg:hidden cursor-pointer absolute top-6 right-5"
            onClick={closeHamburgerMenu}
          />
          <ul className="text-center text-blue space-y-3 hover:font-bold">
            <li>
              <a
                href="#why-study"
                className="block text-2xl hover:cursor-pointer"
                onClick={closeHamburgerMenu}
              >
                Aal-Imran
              </a>
            </li>
            <li>
              <a
                href="#teachers"
                className="block text-2xl hover:cursor-pointer"
                onClick={closeHamburgerMenu}
              >
                Our Teachers
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block text-2xl hover:cursor-pointer"
                onClick={closeHamburgerMenu}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#prices"
                className="block text-2xl hover:cursor-pointer"
                onClick={closeHamburgerMenu}
              >
                Prices
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-2xl hover:cursor-pointer"
                onClick={closeHamburgerMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </menu>
      )}
    </nav>
  );
}
