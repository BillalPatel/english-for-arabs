import React from "react";

interface ButtonProps {
  buttonText: string;
}

export function Button(props: ButtonProps) {
  const { buttonText } = props;

  return <button className="button | rounded-xl px-5 py-3 md:py-4 lg:py-3 md:px-5 lg:px-6 bg-blue hover:text-black text-offWhite md:text-lg lg:text-lg">{buttonText}</button>;
}
