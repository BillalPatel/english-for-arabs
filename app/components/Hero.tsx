"use client";

import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";

import lanternImage from "../../assets/islamic-lantern-svgrepo-com.svg";

import { Button } from "./Button";
export function Hero() {
  return (
    // <div className="hero | flex flex-row justify-between p-12 space-y-10 w-3/4 mx-auto mt-10 mb-36">
    <div className="hero | flex flex-row justify-between p-12 space-y-10 mx-auto mt-10 mb-36">
      <Carousel
        autoplay
        autoplayInterval={3000}
        wrapAround={true}
        animation={"fade"}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
      >
        <div className="carousel-one | w-2/4 mx-auto">
          <div className="space-y-6">
            <h1 className="header | text-6xl text-black">
              Aal-Imran Quran School
            </h1>
            <p className="text-2xl text-black">
              New videos posted regularly by English speaking teachers from
              Egypt.
            </p>
          </div>
          <div className="my-14">
            <Button buttonText="Find out more" />
          </div>
          <Image
            src={lanternImage}
            alt={""}
            className="lantern | relative -top-16 left-56 w-1/4 h-48"
          />
        </div>
        <div className="carousel-two | w-2/4 mx-auto">
          <div className="space-y-6 text-right">
            <h1 className="header | text-8xl text-black text-right">
              مدرسة آل عمران القرآنية
            </h1>
            <p className="desc | text-3xl text-black">
              يتم نشر مقاطع فيديو جديدة بانتظام بواسطة مدرسين يتحدثون الإنجليزية
              من مصر.
            </p>
          </div>
          <div className="text-right my-14">
            <Button buttonText="اكتشف المزيد" />
          </div>
          {/* <Image
            src={lanternImage}
            alt={""}
            className="lantern | relative -top-16 left-56 w-1/4 h-48"
          /> */}
        </div>
      </Carousel>
    </div>
  );
}
