import Image from "next/image";
import Link from "next/link";
import teacherImage from "../../assets/teachers/profile/ahmed.jpeg";
import openLinkIcon from "../../assets/icons/open-link.svg";
import videoIcon from "../../assets/icons/video.svg";

export default function TeacherCard() {
  return (
    <div className="lg:max-w-sm py-10 space-y-3 border-4 rounded-lg hover:scale-105 duration-300 border-brown">
      <h2 className="text-2xl font-bold">Ahmed Mounir</h2>
      <Image
        className="w-48 h-48 lg:w-36 lg:h-36 rounded-full mx-auto"
        src={teacherImage}
        alt="Teacher"
      />
      <div className="space-y-1 mx-auto">
        <Link
          className="flex flex-row justify-center space-x-2 mx-auto hover:opacity-50 cursor-pointer"
          href={""}
        >
          <Image src={openLinkIcon} alt="Open link" />
          <p>View profile</p>
        </Link>
        <Link
          className="flex flex-row justify-center space-x-2 mx-auto hover:opacity-50 cursor-pointer"
          href={""}
        >
          <Image src={videoIcon} alt="Open video" />
          <p>See video</p>
        </Link>
      </div>
      <ul className="lg:text-lg list-disc text-left flex flex-col marker:text-brown overflow-auto list-inside">
        <li className="mx-auto">Studied at Al-Azhar Academy</li>
        <li className="mx-auto">{"Specialises in Qur'an and Arabic"}</li>
        <li className="mx-auto">A very good guy ;)</li>
      </ul>
    </div>
  );
}
