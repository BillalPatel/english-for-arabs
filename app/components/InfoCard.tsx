import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function InfoCard(props: InfoCardProps) {
  const { title, description, imageUrl } = props;

  return (
    <div className="info-card | py-10 space-y-6 duration-300 ease-in-out hover:scale-105">
      <h1 className="text-3xl md:text-2xl lg:text-2xl font-extrabold">
        {title}
      </h1>
      <p className="text-xl font-bold text-center mx-auto max-w-md md:max-w-xl lg:max-w-md px-14 md:px-14 lg:px-20 text-darkGrey">
        {description}
      </p>
      <Image
        className="w-auto h-24 mx-auto"
        src={imageUrl}
        alt="Descriptive icon"
        height={1000}
        width={1000}
      />
    </div>
  );
}
