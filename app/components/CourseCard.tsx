import React from "react";
import Image from "next/image";

interface CourseCardProps {
  courseTitle: string;
  courseDescription: string;
  courseImageUrl: any;
}

export function CourseCard(props: CourseCardProps) {
  const { courseTitle, courseDescription, courseImageUrl } = props;

  return (
    <div
      className={`course-card | rounded-2xl border-solid px-2 py-10 space-y-6`}
    >
      <h1 className="text-3xl font-extrabold">{courseTitle}</h1>
      <Image
        className="w-auto h-auto mx-auto duration-300 ease-in-out md:h-48 lg:h-48 rounded-2xl hover:scale-110"
        src={courseImageUrl}
        alt="Video thumbnail"
      />
      <p className="text-xl font-extrabold">{courseDescription}</p>
    </div>
  );
}
