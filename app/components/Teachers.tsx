import TeacherCard from "./TeacherCard";

export default function Teachers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </div>
  );
}
