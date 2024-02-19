import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface CourseCardProps {
  courseTitle: string;
  courseDescription: string;
  courseImageUrl: any;
}

export default function CourseCard(props: CourseCardProps) {
  const { courseTitle, courseDescription, courseImageUrl } = props;

  return (
    <div className="course-card | border-4 rounded-lg hover:scale-105 duration-300 border-brown pt-4 pb-10 px-4 space-y-7">
      <Image
        className="w-full object-cover h-60 mx-auto rounded-xl"
        src={courseImageUrl}
        height={1000}
        width={1000}
        alt="Course header"
      />
      <div className="space-y-6">
        <h1 className="text-2xl font-extrabold text-ellipsis overflow-clip max-h-8">
          {courseTitle}
        </h1>
        <p className="w-10/12 text-center mx-auto h-36 text-ellipsis overflow-clip">
          {courseDescription}
        </p>
        <Link className="block" href={"#contact"}>
          <button
            type="submit"
            className="button | rounded-xl px-5 py-2 md:px-4 bg-blue hover:text-brown text-offWhite md:text-lg lg:text-lg mx-auto"
          >
            Book Free Trial
          </button>
        </Link>
      </div>
    </div>
  );
}
