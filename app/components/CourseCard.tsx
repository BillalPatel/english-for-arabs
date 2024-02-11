import React from "react";
import Image from "next/image";

interface CourseCardProps {
  courseTitle: string;
  courseDescription: string;
  courseImageUrl: any;
}

export default function CourseCard(props: CourseCardProps) {
  const { courseTitle, courseDescription, courseImageUrl } = props;

  return (
    <div className="course-card | border-2 rounded-lg hover:scale-105 duration-300 border-blue px-2 space-y-4 pb-4 ">
      <Image
        className="w-full h-36 mx-auto md:h-48 lg:h-48 rounded-lg"
        src={courseImageUrl}
        alt="Course header"
      />
      <h1 className="text-2xl font-extrabold">{courseTitle}</h1>
      <p className="w-10/12 text-center mx-auto">{courseDescription}</p>
    </div>
  );
}
