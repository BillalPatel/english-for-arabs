import Image from "next/image";

import { Hero } from "./components/Hero";
import { InfoCard } from "./components/InfoCard";
// import { VideoBox } from "./components/VideoBox";
import { Button } from "./components/Button";
import { CourseCard } from "./components/CourseCard";

import videoIcon from "../assets/hd.svg";
import translationIcon from "../assets/translation-icon.svg";
import qualifiedTeacherIcon from "../assets/certificate-icon.svg";
import teacherImage from "../assets/teacher-medium-skin-tone-svgrepo-com.svg";

import arabicCourseImageOne from "../assets/videos/arabic/arabic-course-one.jpg";
// import courseImage from "../assets/video-icon.svg";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <VideoBox videoLink="https://www.youtube.com/embed/AjOBWmjr09Q" /> */}
      <div className="sections | space-y-36">
        <section>
          <div className="why-study | text-center space-y-12">
            <h1 className="text-5xl font-extrabold">Why Study With Us?</h1>
            <h2 className="text-2xl">
              Improve your Islamic knowledge through our immersive learning
              experience.
            </h2>
            <div className="info-card-section | flex justify-center">
              <InfoCard
                title="High Quality Videos"
                description="All video content is available in HD quality."
                imageUrl={videoIcon}
              />
              <InfoCard
                title="English and Arabic"
                description={"Library of material in both English and Arabic."}
                imageUrl={translationIcon}
              />
              <InfoCard
                title="Highly Qualified Teachers"
                description="Teachers from Al-Azhar University in Cairo."
                imageUrl={qualifiedTeacherIcon}
              />
            </div>
          </div>
        </section>
        <section className="explore-english-courses | text-center space-y-12">
          <div className="space-y-12">
            <h1 className="text-5xl font-extrabold">English Courses</h1>
            <h2 className="text-2xl">
              An increasing number of English courses for students of all
              levels.
            </h2>
          </div>
          <div className="course-cards | flex justify-evenly w-full space-x-16">
            <CourseCard
              courseTitle="Course One"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
            <CourseCard
              courseTitle="Course Two"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
            <CourseCard
              courseTitle="Course Three"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
            <CourseCard
              courseTitle="Course Four"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
          </div>
        </section>
        <section className="explore-arabic-courses | text-center space-y-12">
          <div className="space-y-12">
            <h1 className="font-extrabold text-7xl">دورات اللغة العربية</h1>
            <h2 className="text-4xl">
              عدد متزايد من دورات اللغة العربية الفصحى
            </h2>
          </div>
          <div className="course-cards | flex justify-evenly w-full space-x-10">
            <CourseCard
              courseTitle="Course One"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
            <CourseCard
              courseTitle="Course Two"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
            <CourseCard
              courseTitle="Course Three"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
            <CourseCard
              courseTitle="Course Four"
              courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              courseImageUrl={arabicCourseImageOne}
            />
          </div>
        </section>
        <section className="teacher-info | text-center space-y-8">
          <h1 className="text-5xl font-extrabold">Meet Your Teacher</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nesciunt natus, commodi sed quod odio cum odit voluptate.
          </h2>
          <div className="flex justify-center w-full">
            <Image className="w-auto h-40" src={teacherImage} alt="" />
          </div>
          <Button buttonText={"Learn more"} />
        </section>
      </div>
    </main>
  );
}
