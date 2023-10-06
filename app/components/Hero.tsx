import React from "react";
import Image from "next/image";

import lanternImage from "../../assets/islamic-lantern-svgrepo-com.svg";

import { Button } from "./Button";
export function Hero() {
  return (
    <div className="hero | flex flex-row justify-between p-12 space-y-10 w-3/4 mx-auto mt-10 mb-36">
      <div className="w-2/4">
        <div className="space-y-6">
          <h1 className="header | text-6xl text-black">Aal-Imran Quran School</h1>
          <p className="text-2xl text-black">
            New videos posted regularly by English speaking teachers from Egypt.
          </p>
        </div>
        <div className="my-14">
          <Button buttonText="Find out more" />
        </div>
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
