"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "../../assets/hero/hero.svg";
import familyImage from "../../assets/hero/family.svg";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src={heroImage}
        height={1000}
        width={1000}
        alt="Hero"
        className="h-screen w-full bg-contain z-30 object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-items-center items-center place-items-center place-content-center flex-col space-y-8">
        <div className="flex flex-col md:flex-row lg:flex-row w-full md:w-9/12 lg:w-9/12">
          <div className="w-full md:w-2/4 lg:w-2/4 flex align-middle flex-col place-self-center space-y-7 text-white">
            <div className="text-6xl md:text-5xl lg:text-6xl md:text-left lg:text-left text-center w-full font-bold space-y-3">
              <span className="bg-brown py-2 px-3 text-white">Aal-Imran</span>
              <h1>Quran Academy</h1>
            </div>
            <h4 className="desktop-subheader | hidden text-xl md-text-left lg:text-left text-center mx-auto md:mx-0 lg:mx-0 lg:block w-3/4 leading-8">
              {
                "We are a Quranic school where you can learn Qur'an, Arabic language and Islamic studies with a bunch of the best qualified instructors in all fields."
              }
            </h4>
            <h4 className="mobile-subheader | text-xl md:block lg:hidden md:text-left text-center mx-auto md:mx-0 block w-3/4 max-w-md leading-8">
              {
                "Where you can start learning Qur'an, Islamic studies and Arabic language."
              }
            </h4>
            <Link className="mx-auto md:mx-0 lg:mx-0" href={"#contact"}>
              <button
                className="button | my-8 inline-flex items-center justify-center px-4 md:px-6 lg:px-6 py-2 text-blue hover:text-brown font-bold text-xl hover:text-main whitespace-no-wrap transition duration-200 ease-in-out bg-white rounded-md bg-main focus:outline-none max-w-sm"
                id="submit-button"
              >
                Start Free Trial
              </button>
            </Link>
          </div>
          <div className="w-2/4 hidden md:block lg:block">
            <Image
              src={familyImage}
              alt="Family"
              height={1000}
              width={1000}
              className="h-full object-cover bg-contain flex align-middle place-self-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
