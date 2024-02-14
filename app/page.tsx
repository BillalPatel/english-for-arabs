"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import ContactForm from "./components/Form/ContactForm";
import WhyStudySection from "./components/WhyStudySection";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import familyImage from "../assets/hero/family.svg";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="block md:hidden lg:hidden mx-auto py-20 bg-none">
        <Image
          src={familyImage}
          alt="Family"
          height={1000}
          width={1000}
          className="h-full object-cover bg-contain flex align-middle place-self-center"
        />
      </div>

      <div className="sections | space-y-28 mx-6 md:mx-20 lg:mx-20 mt-16 md:mt-20 lg:mt-24">
        <WhyStudySection />

        <section
          className="teacher-info | text-center space-y-12"
          id="teachers"
        >
          <div className="space-y-8">
            <h1 className="text-5xl text-brown font-extrabold text-center">
              Meet Your Teachers
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-2xl lg:w-2/4 mx-auto">
              We have many highly-qualified teachers <br /> who are all experts
              in their fields.
            </h2>
          </div>

          <Teachers />
        </section>

        <section className="courses-info | text-center space-y-12" id="courses">
          <div className="space-y-8">
            <h1 className="text-5xl text-brown font-extrabold text-center">
              Our Courses
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-2xl w-3/4 lg:w-2/4 mx-auto">
              Choose from a range of courses for various Islamic sciences.
            </h2>
          </div>
          <Courses />
        </section>

        <section className="prices | text-center space-y-12" id="prices">
          <div className="space-y-8">
            <h1 className="text-5xl text-brown font-extrabold text-center mx-auto">
              Choose Your Plan
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-2xl mx-auto">
              A wide variety of prices to suit your needs. <br className="hidden md:block lg:block" />
              We also offer a free trial for your first lesson.
            </h2>
          </div>

          <Pricing />
        </section>

        <section className="contact | mx-auto space-y-12" id="contact">
          <div className="space-y-8">
            <h1 className="text-5xl text-brown font-extrabold text-center mx-auto">
              Book a Lesson
            </h1>
            <h2 className="mx-auto text-xl md:text-2xl lg:text-2xl w-3/4 md:w-full lg:w-full text-center">
              Get in touch to book your first lesson. <br /> We are happy to
              help with any questions you may have.
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
