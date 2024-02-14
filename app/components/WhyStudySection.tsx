import InfoCard from "./InfoCard";
import qualifiedTeacherIcon from "../../assets/certificate-icon.svg";
import laptopIcon from "../../assets/laptop.svg";
import clockIcon from "../../assets/clock.svg";

export default function WhyStudySection() {
  return (
    <section
      className="why-study | text-center space-y-12 flex flex-col"
      id="why-study"
    >
      <div className="space-y-8">
        <h1 className="text-5xl text-brown font-extrabold text-center">
          Why Study With Us?
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-2xl">
          Improve your Islamic knowledge through <br />our immersive learning
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
  );
}
