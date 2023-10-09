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
        <div className="carousel-two | w-3/5 mx-auto flex flex-row">
          <div>
            <div className="space-y-6 text-right">
              {/* <div className="flex flex-row">
                <Image
                  src={lanternImage}
                  alt={""}
                  className="lantern | relative h-48 w-auto top-0 "
                />
                <Image
                  src={lanternImage}
                  alt={""}
                  className="lantern | relative h-48 w-auto top-44"
                />
              </div> */}
              <h1 className="header | text-8xl text-black text-right">
                مدرسة آل عمران القرآنية
              </h1>
              <p className="desc | text-3xl text-black">
                يتم نشر مقاطع فيديو جديدة بانتظام بواسطة مدرسين يتحدثون
                الإنجليزية من مصر.
              </p>
            </div>
            <div className="text-right my-14">
              <Button buttonText="اكتشف المزيد" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
