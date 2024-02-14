import Link from "next/link";
import Badge from "./Badge";
import Button from "./Button";

interface PricingCardProps {
  type?: string;
  tier: string;
  price: string;
  length: string;
  weeklyLessons: number;
  monthlyLessons: number;
  numberOfStudents?: number;
  offer?: string;
}

export default function PricingCard({
  type = "individual",
  tier,
  price,
  length,
  weeklyLessons,
  monthlyLessons,
  numberOfStudents,
  offer,
}: PricingCardProps): JSX.Element {
  return (
    <div className="pricing-card | relative lg:max-w-sm border-4 border-brown py-10 md:px-14 lg:px-16 w-3/4 md:w-full lg:w-full rounded-2xl space-y-4 text-center mx-auto hover:scale-105 duration-300">
      <div className="absolute top-4 right-4">
        <Badge text="Free Trial" />
      </div>
      <h2 className="text-3xl">{tier}</h2>
      {type === "individual" ? (
        <div className="flex flex-row justify-center space-x-2">
          <h3 className="text-6xl font-bold text-brown">{price}</h3>
          <div className="flex flex-col text-left place-content-center">
            <p className="font-bold">USD</p>
            <p>per lesson</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center space-x-2 space-y-3 text-center">
          <h2 className="text-2xl">
            <span className="bg-brown px-2 py-1 mr-2 text-white">
              {numberOfStudents}
            </span>
            students
          </h2>
          <h3 className="text-2xl font-bold text-blue">Contact Us</h3>
          <p className="flex flex-col place-content-center text-lg">
            For Pricing Information
          </p>
        </div>
      )}
      {type === "individual" ? (
        <div className="space-y-3">
          <h4 className="text-xl font-bold">{length} minutes</h4>
          <p className="text-lg">
            <span className="bg-brown px-2 py-1 text-white">
              {weeklyLessons}
            </span>{" "}
            lessons a week
          </p>
          <p className="text-lg">
            <span className="bg-brown px-2 py-1 text-white">
              {monthlyLessons}
            </span>{" "}
            lessons a month
          </p>
        </div>
      ) : (
        <h4 className="text-xl font-bold bg-brown px- py-1 text-white">
          {offer}
        </h4>
      )}
      <Link className="pt-4 block" href={"#contact"}>
        <Button buttonText={"Sign Up"} />
      </Link>
    </div>
  );
}
