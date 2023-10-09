"use client";

import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";

import displayAr from "../../assets/hero-left-to-right.svg";
import displayEng from "../../assets/hero-right-to-left.svg";

import { Button } from "./Button";
export function Hero() {
  return (
    <div className="hero | flex flex-col lg:p-12 md:flex-row lg:flex-row justify-between py-2 md:p-12 space-y-10 mx-auto md:mt-10 lg:mt-10 mb-24">
      <Carousel
        autoplay
        autoplayInterval={2500}
        wrapAround={true}
        animation={"fade"}
        // renderCenterLeftControls={null}
        // renderCenterRightControls={null}
        // renderBottomCenterControls={null}
        withoutControls
      >
        <div className="carousel-one | w-11/12 md:w-9/12 lg:w-9/12 mx-auto flex flex-row">
          <div className="space-y-3 md:w-6/12 lg:w-6/12 md:space-y-10 lg:space-y-10">
            <h1 className="header | text-3xl md:text-6xl lg:text-6xl text-black">
              Aal-Imran Quran School
            </h1>
            <p className="text-xl text-black md:text-2xl lg:text-2xl">
              New videos posted regularly by English speaking teachers from
              Egypt.
            </p>
            <div className="mx-auto my-10">
              <Button buttonText="Find out more" />
            </div>
          </div>
          <Image
            src={displayEng}
            alt="Hero"
            className="image | h-96 w-auto hidden md:flex lg:flex"
          />
        </div>
        <div className="carousel-two | w-10/12 md:w-9/12 lg:w-9/12 mx-auto flex flex-col md:flex-row lg:flex-row">
          <div className="flex flex-row mx-auto text-right md:space-y-6 lg:space-y-6 md:space-x-16 lg:space-x-16">
            <Image
              src={displayAr}
              alt="Hero"
              className="image | hidden md:h-96 lg:h-96 w-auto h-56 md:flex lg:flex"
            />
            <div className="space-y-3 md:space-y-10 lg:space-y-10 md:w-6/12 lg:w-6/12">
              <h1 className="header | text-3xl lg:text-8xl md:text-8xl text-black text-right">
                مدرسة آل عمران القرآنية
              </h1>
              <p className="desc | text-xl md:text-3xl lg:text-3xl text-black">
                يتم نشر مقاطع فيديو جديدة بانتظام بواسطة مدرسين يتحدثون
                الإنجليزية من مصر.
              </p>
              <div className="my-10 text-right">
                <Button buttonText="اكتشف المزيد" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
