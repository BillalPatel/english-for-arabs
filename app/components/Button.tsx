import React from "react";

interface ButtonProps {
  buttonText: string;
}

export function Button(props: ButtonProps) {
  const { buttonText } = props;

  return <button className="button | rounded-xl px-5 py-3 md:py-4 lg:py-4 md:px-7 lg:px-7 bg-black hover:text-black text-offWhite font-extrabold md:text-xl lg:text-xl">{buttonText}</button>;
}
