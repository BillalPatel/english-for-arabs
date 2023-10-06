import React from "react";
import Image from "next/image";

import iconImage from "../../assets/logo.jpeg";

export function Footer() {
  return (
    <div className="footer | min-h-[50vh] flex flex-col h-40 bg-darkGrey text-center text-2xl mt-32 w-screen absolute left-0">
      <h1 className="my-20">This is the footer</h1>
      <div className="logo-image">
        <Image src={iconImage} alt={""} className="logo | h-32 w-auto mx-auto mt-20" />
      </div>
    </div>
  );
}
