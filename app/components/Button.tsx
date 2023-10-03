import React from "react";

interface ButtonProps {
  buttonText: string;
}

export function Button(props: ButtonProps) {
  const { buttonText } = props;

  return <button className="button | rounded-xl p-4 bg-[#1D242B] hover:bg-[#C7EEFF] text-slate-200 hover:text-[#1D242B] font-extrabold">{buttonText}</button>;
}
