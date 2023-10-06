import React from "react";

interface ButtonProps {
  buttonText: string;
}

export function Button(props: ButtonProps) {
  const { buttonText } = props;

  return <button className="button | rounded-xl py-4 px-7 bg-darkGrey hover:text-white text-black font-extrabold text-xl">{buttonText}</button>;
}
