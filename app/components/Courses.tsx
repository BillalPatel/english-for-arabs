import { courseData } from "../data/course/course";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
      {courseData.map((course: any) => (
        <CourseCard
          key={course.id}
          courseTitle={course.name}
          courseDescription={course.description}
          courseImageUrl={course.imageUrl}
        />
      ))}
    </div>
  );
}
