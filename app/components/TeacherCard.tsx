import Image from "next/image";
import Link from "next/link";
import openLinkIcon from "../../assets/icons/open-link.svg";
import videoIcon from "../../assets/icons/video.svg";

interface TeacherCardProps {
  teacherName: string;
  teacherImage: string;
  youTubeUrl: string;
  profileUrl: string;
  preferredLanguages: string;
  englishLevel: string;
  preferredAges: string;
  subjects: string;
  availability: string;
}

export default function TeacherCard(props: TeacherCardProps) {
  const {
    teacherName,
    teacherImage,
    youTubeUrl,
    profileUrl,
    preferredLanguages,
    englishLevel,
    preferredAges,
    subjects,
    availability,
  } = props;
  return (
    <div className="lg:max-w-sm py-10 space-y-3 border-4 rounded-lg hover:scale-105 duration-300 border-brown">
      <h2 className="text-2xl font-bold">{teacherName}</h2>
      <Image
        className="w-48 h-48 lg:w-36 lg:h-36 rounded-full mx-auto"
        src={teacherImage}
        alt="Teacher"
        height={1000}
        width={1000}
      />
      <div className="space-y-1 mx-auto">
        <Link
          className="flex flex-row justify-center space-x-2 mx-auto hover:opacity-50 cursor-pointer"
          href={profileUrl}
          target="_blank"
        >
          <Image
            src={openLinkIcon}
            alt="Open link"
            height={1000}
            width={1000}
            className="h-4 w-4 flex place-self-center"
          />
          <p>View profile</p>
        </Link>
        <Link
          className="flex flex-row justify-center space-x-2 mx-auto hover:opacity-50 cursor-pointer"
          href={youTubeUrl}
          target="_blank"
        >
          <Image
            src={videoIcon}
            alt="Open video"
            height={1000}
            width={1000}
            className="h-4 w-4 flex place-self-center"
          />
          <p>See video</p>
        </Link>
      </div>
      <ul className="lg:text-lg list-disc flex flex-col marker:text-brown overflow-auto justify-left text-left px-16 space-y-1">
        <li>
          <span className="font-bold">Languages: </span>
          {preferredLanguages}
        </li>
        <li>
          <span className="font-bold">Eng level: </span>
          {englishLevel}
        </li>
        <li>
          <span className="font-bold">Preferred ages: </span>
          {preferredAges}
        </li>
        <li>
          <span className="font-bold">Subjects: </span>
          {subjects}
        </li>
        <li>
          <span className="font-bold">Availability: </span>
          {availability}
        </li>
      </ul>
    </div>
  );
}
