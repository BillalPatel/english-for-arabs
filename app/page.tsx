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
import PricingCard from "./components/PricingCard";
import ContactForm from "./components/Form/ContactForm";
import teacherImage from "../assets/ahmed.jpeg";
import expandVideoIcon from "../assets/expand-link.svg";
import TeacherCard from "./components/TeacherCard";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="sections | space-y-36">
        <section
          className="why-study | text-center space-y-12 flex flex-col"
          id="why-study"
        >
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

        <section className="teacher-info | text-center space-y-8 py-16">
          <h1 className="text-5xl font-extrabold">Meet Your Teachers</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nesciunt natus, commodi sed quod odio cum odit voluptate.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </div>
        </section>

        {/* How it works section - https://ulumalazhar.com/course/arabic-studies/ */}

        <section className="space-y-20" id="prices">
          <div className="prices | text-3xl text-center space-y-6 md:w-5/6 lg:w-4/6 mx-auto">
            <h1 className="text-3xl">Choose Your Plan</h1>
            <h3 className="text-lg">
              A wide variety of prices to suit your needs.
            </h3>
          </div>

          <div className="mx-auto space-x-5 flex justify-center items-center">
            <button className="button | rounded px-5 py-3 md:py-4 lg:py-4 md:px-7 lg:px-7 bg-black hover:text-black text-offWhite font-extrabold md:text-xl lg:text-xl">
              30 mins
            </button>
            <button className="button | rounded-xl px-5 py-3 md:py-4 lg:py-4 md:px-7 lg:px-7 bg-darkGrey hover:text-black text-offWhite font-extrabold md:text-xl lg:text-xl">
              60 mins
            </button>
          </div>

          <div className="space-x-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
              <PricingCard
                tier={"Bronze"}
                price={"20"}
                length={"60"}
                weeklyLessons={2}
                monthlyLessons={8}
              />
              <PricingCard
                tier={"Bronze"}
                price={"20"}
                length={"60"}
                weeklyLessons={2}
                monthlyLessons={8}
              />
              <PricingCard
                tier={"Bronze"}
                price={"20"}
                length={"60"}
                weeklyLessons={2}
                monthlyLessons={8}
              />
              <PricingCard
                tier={"Bronze"}
                price={"20"}
                length={"60"}
                weeklyLessons={2}
                monthlyLessons={8}
              />
            </div>
          </div>
        </section>

        <section>
          {/* <div>
            <label className="block text-gray-700 text-sm mb-2">
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // id={id}
              // type={type}
              // name={name}
              // onBlur={onBlurHandler}
              placeholder="first name"
              // value={value}
            />
          </div> */}

          <section className="mx-auto space-y-4">
            <h1 className="text-5xl font-extrabold text-center">Book a Lesson</h1>
            <h2 className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            {/* <div className="mx-auto flex justify-center w-full"> */}

            <ContactForm />
            {/* </div> */}
          </section>
        </section>
      </div>
    </main>
  );
}
