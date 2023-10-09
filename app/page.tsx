"use client";

import Image from "next/image";
import Carousel from "nuka-carousel";

import { Hero } from "./components/Hero";
import { InfoCard } from "./components/InfoCard";
import { Button } from "./components/Button";
import { CourseCard } from "./components/CourseCard";

import videoIcon from "../assets/hd.svg";
import translationIcon from "../assets/translation-icon.svg";
import qualifiedTeacherIcon from "../assets/certificate-icon.svg";
import teacherImage from "../assets/teacher-medium-skin-tone-svgrepo-com.svg";

import arabicCourseImageOne from "../assets/videos/arabic/arabic-course-one.jpg";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="sections | space-y-36">
        <section className="why-study-section | text-center space-y-12 flex flex-col">
          <div className="space-y-8 header">
            <h1 className="text-5xl font-extrabold">Why Study With Us?</h1>
            <h2 className="text-2xl">
              Improve your Islamic knowledge through our immersive learning
              experience.
            </h2>
          </div>
          <div className="info-card-section | flex justify-center flex-col md:flex-row lg:flex-row">
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
        </section>
        <section className="explore-english-courses | text-center space-y-12">
          <div className="space-y-12">
            <h1 className="text-5xl font-extrabold">English Courses</h1>
            <h2 className="text-2xl">
              An increasing number of English courses for students of all
              levels.
            </h2>
          </div>
          {/* <div className="course-cards | flex md:justify-evenly lg:justify-evenly w-full md:space-x-16 lg:space-x-16 flex-col md:flex-row lg:flex-row"> */}
          <div className="course-cards | flex flex-col">
            <Carousel
              cellAlign="left"
              slidesToShow={4}
              animation={"fade"}
              // renderCenterLeftControls={null}
              // renderCenterRightControls={null}
              // vertical={false}
              // withoutControls
              // slidesToScroll={3}
              swiping
            >
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
              <CourseCard
                courseTitle="Course Five"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Six"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Four"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Five"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Six"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Four"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Five"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
              <CourseCard
                courseTitle="Course Six"
                courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                courseImageUrl={arabicCourseImageOne}
              />
            </Carousel>
          </div>
        </section>
        <section className="explore-arabic-courses | text-center space-y-12">
          <div className="space-y-12">
            <h1 className="font-extrabold text-7xl">دورات اللغة العربية</h1>
            <h2 className="text-4xl">
              عدد متزايد من دورات اللغة العربية الفصحى
            </h2>
          </div>
          <div className="course-cards | flex md:justify-evenly lg:justify-evenly w-full md:space-x-16 lg:space-x-16 flex-col md:flex-row lg:flex-row">
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
        {/* <section className="teacher-info | text-center space-y-8">
          <h1 className="text-5xl font-extrabold">Meet Your Teacher</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nesciunt natus, commodi sed quod odio cum odit voluptate.
          </h2>
          <div className="flex justify-center w-full">
            <Image className="w-auto h-40" src={teacherImage} alt="" />
          </div>
          <Button buttonText={"Learn more"} />
        </section> */}
      </div>
    </main>
  );
}
