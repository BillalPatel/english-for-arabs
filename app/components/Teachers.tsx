import TeacherCard from "./TeacherCard";
import { teacherData } from "../data/teacher/teacher";

export default function Teachers() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5"
      style={{
        gridAutoFlow: "dense",
        gridAutoColumns: "1fr",
      }}
    >
      {teacherData.map((teacher: any) => (
        <TeacherCard
          key={teacher.id}
          teacherName={teacher.teacherName}
          teacherImage={teacher.teacherImage}
          youTubeUrl={teacher.youTubeUrl}
          profileUrl={teacher.profileUrl}
          preferredLanguages={teacher.preferredLanguages}
          preferredAges={teacher.preferredAge}
          subjects={teacher.subjects}
          availability={teacher.availability}
        />
      ))}
    </div>
  );
}
