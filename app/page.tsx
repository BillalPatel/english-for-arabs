import Image from "next/image";

import { Hero } from "./components/Hero";
import { InfoCard } from "./components/InfoCard";
// import { VideoBox } from "./components/VideoBox";
import { Button } from "./components/Button";

import firstImage from "../assets/globe-svgrepo-com.svg";
import secondImage from "../assets/video-courses-svgrepo-com.svg";
import thirdImage from "../assets/kaaba-svgrepo-com.svg";
import teacherImage from "../assets/teacher-medium-skin-tone-svgrepo-com.svg";

export default function Home() {
  return (
    <main className="mx-16 space-y-20">
      <div className="text-2xl font-extrabold"></div>
      <Hero />
      {/* <VideoBox videoLink="https://www.youtube.com/embed/AjOBWmjr09Q" /> */}
      <section>
        <div className="why-study | text-center space-y-12">
          <h1 className="text-5xl font-extrabold ">Why study with us?</h1>
          <h2 className="text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            neque soluta!
          </h2>
          <div className="info-card-section | flex justify-evenly w-full space-x-16">
            <InfoCard
              title="This is the best school"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              imageUrl={firstImage}
            />
            <InfoCard
              title="This is the best school"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              imageUrl={secondImage}
            />
            <InfoCard
              title="This is the best school"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              imageUrl={thirdImage}
            />
          </div>
        </div>
      </section>
      <section className="explore-courses">Explore courses</section>
      <section className="teacher-info | text-center space-y-8">
        <h1 className="text-3xl font-extrabold">Meet your teacher</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nesciunt natus, commodi sed quod odio cum odit voluptate.
        </h2>
        <div className="flex justify-center w-full">
          <Image className="w-auto h-40" src={teacherImage} alt="" />
        </div>
        <Button buttonText={"Learn more"} />
      </section>
    </main>
  );
}
