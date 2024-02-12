import React from "react";

interface ButtonProps {
  buttonText: string;
  width?: string;
}

export function Button(props: ButtonProps) {
  const { buttonText, width = "40" } = props;

  // return <button className="button | rounded-xl px-5 py-2 md:px-4 lg:px-5 bg-blue hover:text-brown text-offWhite md:text-lg lg:text-lg w-full md:w-28 lg:w-28">{buttonText}</button>;
  return (
    <button
      className={`button | rounded-xl px-5 py-2 md:px-4 lg:px-5 bg-blue hover:text-brown text-offWhite md:text-lg lg:text-lg w-${width} md:w-28 lg:w-28 mx-auto`}
    >
      {buttonText}
    </button>
  );
  // <button className="button | rounded-xl px-5 py-3 md:py-4 lg:py-3 md:px-7 lg:px-7 bg-blue hover:text-black text-offWhite w-full md:w-40 lg:w-40 mx-auto"></button>
}
