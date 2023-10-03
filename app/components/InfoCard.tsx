import React from "react";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function InfoCard(props: InfoCardProps) {
  const { title, description, imageUrl } = props;

  return (
    <div className="info-card | rounded-2xl bg-[#C7EEFF] border-solid px-6 py-10 space-y-6">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="text-xl font-extrabold">{description}</p>
      <Image className="w-auto h-32 mx-auto duration-300 ease-in-out hover:scale-110" src={imageUrl} alt={""} />
    </div>
  );
}
