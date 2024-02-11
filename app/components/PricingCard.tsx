import React from "react";
import { Button } from "./Button";

interface PricingCardProps {
  tier: string;
  price: string;
  length: string;
  weeklyLessons: number;
  monthlyLessons: number;
}

export default function PricingCard({
  tier,
  price,
  length,
  weeklyLessons,
  monthlyLessons,
}: PricingCardProps): JSX.Element {
  return (
    <div className="pricing-card | lg:max-w-sm border-2 py-8 md:px-14 lg:px-16 w-3/4 md:w-full lg:w-full rounded-2xl space-y-4 text-center mx-auto hover:scale-105 duration-300">
      <h2 className="text-3xl">{tier}</h2>
      <div className="flex flex-row justify-center space-x-2">
        <h3 className="text-6xl font-bold text-brown">{price}</h3>
        <div className="flex flex-col text-left place-content-center">
          <p className="font-bold">USD</p>
          <p>per lesson</p>
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-xl font-bold">{length} minutes</h4>
        <p className="text-lg">
          <span className=" underline decoration-brown decoration-2 underline-offset-4">
            {weeklyLessons}
          </span>{" "}
          lessons a week
        </p>
        <p className="text-lg">
          <span className=" underline decoration-brown decoration-2 underline-offset-4">
            {monthlyLessons}
          </span>{" "}
          lessons a month
        </p>
        <div className="pt-6">
          <Button buttonText={"Sign Up"} />
        </div>
      </div>
    </div>
  );
}
