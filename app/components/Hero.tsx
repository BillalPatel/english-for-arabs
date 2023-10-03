import React from "react";
import Image from "next/image";

import lanternImage from "../../assets/islamic-lantern-svgrepo-com.svg";

import { Button } from "./Button";
export function Hero() {
  return (
    <div className="hero | my-20 flex flex-row justify-between rounded-2xl border-red-800 bg-[#0077C0] border-solid p-12 space-y-10">
      <div className="w-2/4 space-y-10">
        <h1 className="header | text-5xl">Aal-Imran Quran School</h1>
        <p className="text-2xl text-[#C7EEFF]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
          excepturi rerum reiciendis illo obcaecati soluta.{" "}
        </p>
        <Button buttonText="Find out more" />
      </div>
      <div className="w-2/4">
        <Image
          src={lanternImage}
          alt={""}
          className="lantern | relative -top-16 left-56 w-1/4 h-48"
        />
      </div>
    </div>
  );
}
