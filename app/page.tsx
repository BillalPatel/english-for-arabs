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
          id="blur"
          className="h-screen w-full bg-contain z-30 object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-items-center items-center place-items-center place-content-center flex-col space-y-8">
          <div className="flex flex-row w-full md:w-9/12 lg:w-9/12">
            <div className="w-full md:w-2/4 lg:w-2/4 flex align-middle flex-col place-self-center space-y-7 text-white">
              <h1 className="text-6xl md:text-5xl lg:text-6xl md:text-left lg:text-left text-center w-full font-bold space-y-3">
                <span className="bg-brown py-2 px-3 text-white">Aal-Imran</span>
                <h1>Quran Academy</h1>
              </h1>
              <h4 className="desktop-subheader | hidden text-xl md-text-left lg:text-left text-center mx-auto md:mx-0 lg:mx-0 lg:block w-3/4 leading-8">
                {
                  "We are a Quranic school where you can learn Qur'an, Arabic language and Islamic studies with a bunch of the best qualified instructors in all fields."
                }
              </h4>
              <h4 className="mobile-subheader | text-xl md:block lg:hidden md:text-left text-center mx-auto md:mx-0 block w-3/4 max-w-md leading-8">
                {
                  "Where you can start learning Qur'an, Islamic studies and Arabic language."
                }
              </h4>
              <div className="mx-auto md:mx-0 lg:mx-0">
                <button
                  className="button | my-8 inline-flex items-center justify-center px-4 md:px-6 lg:px-6 py-2 text-blue hover:text-brown font-bold text-xl hover:text-main whitespace-no-wrap transition duration-200 ease-in-out bg-white rounded-md bg-main focus:outline-none max-w-sm"
                  id="submit-button"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="w-2/4 hidden md:block lg:block">
              <Image
                src={familyImage}
                alt="Family"
                id="blur"
                className="h-full object-cover bg-contain flex align-middle place-self-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sections | space-y-36 mx-6 md:mx-20 lg:mx-20 mt-16 md:mt-20 lg:mt-24">
        <section
          className="why-study | text-center space-y-12 flex flex-col"
          id="why-study"
        >
          <div className="space-y-8 header">
            <h1 className="text-5xl text-brown font-extrabold text-center">
              Why Study With Us?
            </h1>
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
          <h1 className="text-5xl text-brown font-extrabold text-center">
            Meet Your Teachers
          </h1>
          <h2 className="w-3/4 lg:w-2/4 mx-auto">
            We have a range of highly-qualified teachers who all possess strong
            English skills.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-evenly">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </div>
        </section>

        <section className="courses-info | text-center space-y-8" id="courses">
          <h1 className="text-5xl text-brown font-extrabold text-center">
            Our Courses
          </h1>
          <h2 className="w-3/4 lg:w-2/4 mx-auto">
            Choose from a variety of courses for various Islamic sciences. We
            offer 30 minute and 60 minute lessons to ensure we are as flexible
            as you need us to be.
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
            <h1 className="text-5xl text-brown font-extrabold text-center">
              Choose Your Plan
            </h1>
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

        <section className="mx-auto space-y-9" id="contact">
          <div className="space-y-7">
            <h1 className="text-5xl text-brown font-extrabold text-center">
              Book a Lesson
            </h1>
            <h2 className="mx-auto w-3/4 md:w-full lg:w-full text-center">
              Get in touch to book your first lesson. We are happy to help with
              any questions you may have.
            </h2>
          </div>
          <ContactForm />
        </section>
      </div>

      <ScrollToTopButton />
      <WhatsAppFloatingButton />
    </main>
  );
}
