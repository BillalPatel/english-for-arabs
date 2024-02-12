import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

interface CourseCardProps {
  courseTitle: string;
  courseDescription: string;
  courseImageUrl: any;
}

export default function CourseCard(props: CourseCardProps) {
  const { courseTitle, courseDescription, courseImageUrl } = props;

  return (
    <div className="course-card | border-2 rounded-lg hover:scale-105 duration-300 border-blue space-y-4 py-4">
      <Image
        className="w-full object-cover h-60 mx-auto px-4 rounded-xl"
        src={courseImageUrl}
        alt="Course header"
      />
      <div className="space-y-4">
        <h1 className="text-2xl font-extrabold">{courseTitle}</h1>
        <p className="w-10/12 text-center mx-auto">{courseDescription}</p>
        <Link className="pt-1 block" href={"#contact"}>
          <Button buttonText={"Sign Up"} />
        </Link>
      </div>
    </div>
  );
}
