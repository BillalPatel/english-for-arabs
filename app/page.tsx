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
import qualifiedTeacherIcon from "../assets/certificate-icon.svg";
import laptopIcon from "../assets/laptop.svg";
import clockIcon from "../assets/clock.svg";
import desktopHeroImage from "../assets/hero/hero-desktop.jpg";
import familyImage from "../assets/hero/family.svg";
import courseImage from "../assets/courses/course.jpg";
import Pricing from "./components/Pricing";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <main className="">
      {/* <Hero /> */}
      <div className="relative">
        <Navbar />

        <Image
          src={desktopHeroImage}
          alt="Hero"
          className="h-screen w-full bg-contain z-30 object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-items-center items-center place-items-center place-content-center flex-col space-y-8">
          <div className="flex flex-col md:flex-row lg:flex-row w-full md:w-9/12 lg:w-9/12">
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
              <Link className="mx-auto md:mx-0 lg:mx-0" href={"#contact"}>
                <button
                  className="button | my-8 inline-flex items-center justify-center px-4 md:px-6 lg:px-6 py-2 text-blue hover:text-brown font-bold text-xl hover:text-main whitespace-no-wrap transition duration-200 ease-in-out bg-white rounded-md bg-main focus:outline-none max-w-sm"
                  id="submit-button"
                >
                  Start Free Trial
                </button>
              </Link>
            </div>
            <div className="w-2/4 hidden md:block lg:block">
              <Image
                src={familyImage}
                alt="Family"
                className="h-full object-cover bg-contain flex align-middle place-self-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden mx-auto py-20 bg-brown">
        <Image
          src={familyImage}
          alt="Family"
          className="h-full object-cover bg-contain flex align-middle place-self-center"
        />
      </div>

      <div className="sections | space-y-28 mx-6 md:mx-20 lg:mx-20 mt-16 md:mt-20 lg:mt-24">
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
              title="24/7 Availability"
              description="Consistently available, around the clock."
              imageUrl={clockIcon}
            />
            <InfoCard
              title="Highly Qualified Tutors"
              description="Teachers from Al-Azhar and other specialist institutes."
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
          <Courses />
        </section>

        {/* How it works section - https://ulumalazhar.com/course/arabic-studies/ */}

        <section className="space-y-10" id="prices">
          <div className="prices | text-3xl text-center space-y-6 md:w-5/6 lg:w-4/6 mx-auto">
            <h1 className="text-5xl text-brown font-extrabold text-center">
              Choose Your Plan
            </h1>
            <h3 className="text-lg">
              A wide variety of prices to suit your needs.
            </h3>
          </div>

          <Pricing />
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
