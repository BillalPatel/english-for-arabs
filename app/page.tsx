"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "nuka-carousel";

import { Hero } from "./components/Hero";
import { InfoCard } from "./components/InfoCard";

import PricingCard from "./components/PricingCard";
import ContactForm from "./components/Form/ContactForm";
import TeacherCard from "./components/TeacherCard";
import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import englishIcon from "../assets/english.svg";
import qualifiedTeacherIcon from "../assets/certificate-icon.svg";
import laptopIcon from "../assets/laptop.svg";
import desktopHeroImage from "../assets/hero/hero-desktop.jpg";
import familyImage from "../assets/hero/family.svg";
import courseImage from "../assets/courses/course.jpg";

export default function Home() {
  return (
    <main className="">
      {/* <Hero /> */}

      {/* <section className="w-full py-5 mb-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-5">
                <h1 className="text-2xl md:text-3xl lg:text-3xl w-5/6 lg:w-full font-bold sm:text-5xl xl:text-6xl/none leading-10 text-center mx-auto lg:mx-0 md:text-center lg:text-left">
                  Learn Islamic Studies, Quran, and Arabic Online
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 lg:leading-8 w-4/6 lg:w-full text-center md:text-center lg:text-left mx-auto lg:mx-0">
                  Join our platform for 1-2-1 lessons from highly skilled
                  teachers. Explore the depths of Islamic knowledge with us.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row mx-auto lg:mx-0">
                <Button buttonText={"Pricing"} />
                <Button buttonText={"Contact Us"} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="relative">
        <Navbar />

        <Image
          src={desktopHeroImage}
          alt="Hero"
          className="h-screen w-full bg-contain -z-50 object-cover opacity-100"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-40 flex justify-items-center items-center place-items-center place-content-center flex-col space-y-8">
          {/* <div className="flex lg:flex-row flex-col w-8/12"> */}
          <div className="flex flex-row w-8/12">
            <div className="w-2/4 flex align-middle flex-col place-self-center space-y-4 text-white">
              <h1 className="text-3xl lg:text-6xl text-left w-3/5 lg:w-full">
                Aal-Imran Quran Academy
              </h1>
              <h4 className="text-xl text-left wleading-10 hidden lg:block w-9/12">
                Join our platform for 1-2-1 lessons from highly skilled
                teachers.
              </h4>
              <div>
                <button
                  className="button | my-8 inline-flex items-center justify-center px-4 md:px-6 lg:px-6 py-2 text-blue hover:text-brown font-bold hover:text-main whitespace-no-wrap transition duration-300 ease-in-out bg-white rounded-md bg-main focus:outline-none max-w-sm"
                  id="submit-button"
                >
                  Start Your Free Trial Now
                </button>
              </div>
            </div>
            <div className="w-2/4">
              <Image
                src={familyImage}
                alt="Family"
                className="h-96 object-cover bg-contain flex align-middle place-self-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sections | space-y-36 mx-6 md:mx-20 lg:mx-20 mt-16">
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
          <div className="info-card-section | flex justify-center flex-col md:flex-col lg:flex-row">
            <InfoCard
              title="Interactive Sessions"
              description="Personalized sessions for immersive learning."
              imageUrl={laptopIcon}
            />
            <InfoCard
              title="Bilingual teachers"
              description="All teachers are proficient in English."
              imageUrl={englishIcon}
            />
            <InfoCard
              title="Highly Qualified Tutors"
              description="Teachers from Al-Azhar University in Cairo."
              imageUrl={qualifiedTeacherIcon}
            />
          </div>
        </section>

        <section className="teacher-info | text-center space-y-8" id="teachers">
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

        <section className="courses-info | text-center space-y-8" id="courses">
          <h1 className="text-5xl font-extrabold">Courses</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nesciunt natus, commodi sed quod odio cum odit voluptate.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
            <CourseCard
              courseTitle={"Qur'an Memorization"}
              courseDescription="ijojoieijop eepif epjfjepofepofk oek poefk efefpo efkpo efkop efkpoefk efk oef epkoefkpoe fefkp efkp efpek"
              courseImageUrl={courseImage}
            />
            <CourseCard
              courseTitle={"Qur'an Memorization"}
              courseDescription="ijojoieijop eepif epjfjepofepofk oek poefk efefpo efkpo efkop efkpoefk efk oef epkoefkpoe fefkp efkp efpek"
              courseImageUrl={undefined}
            />
            <CourseCard
              courseTitle={"Qur'an Memorization"}
              courseDescription="ijojoieijop eepif epjfjepofepofk oek poefk efefpo efkpo efkop efkpoefk efk oef epkoefkpoe fefkp efkp efpek"
              courseImageUrl={undefined}
            />
            <CourseCard
              courseTitle={"Qur'an Memorization"}
              courseDescription="ijojoieijop eepif epjfjepofepofk oek poefk efefpo efkpo efkop efkpoefk efk oef epkoefkpoe fefkp efkp efpek"
              courseImageUrl={undefined}
            />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
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
          <section className="mx-auto space-y-4" id="contact">
            <h1 className="text-5xl font-extrabold text-center">
              Book a Lesson
            </h1>
            <h2 className="text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <ContactForm />
          </section>
        </section>
      </div>

      <ScrollToTopButton />
      <WhatsAppFloatingButton />
    </main>
  );
}
