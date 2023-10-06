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
    <div className="info-card | px-8 py-10 space-y-6 duration-300 ease-in-out hover:scale-105">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="px-20 text-xl font-extrabold text-darkGrey">{description}</p>
      <Image className="w-auto h-24 mx-auto" src={imageUrl} alt={""} />
    </div>
  );
}
