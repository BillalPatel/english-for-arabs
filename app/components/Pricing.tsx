import { useState } from "react";
import PricingCard from "./PricingCard";
import { thirtyMinuteData } from "../data/lesson/thirtyMinutes";
import { sixtyMinuteData } from "../data/lesson/sixtyMinutes";
import { groupData } from "../data/lesson/group";

export default function Pricing() {
  const [pricingChoice, setPricingChoice] = useState<any[]>(thirtyMinuteData);

  function setPricingToThirtyyMinuteData() {
    setPricingChoice(thirtyMinuteData);
  }

  function setPricingToSixtyMinuteData() {
    setPricingChoice(sixtyMinuteData);
  }

  function setPricingToGroupData() {
    setPricingChoice(groupData);
  }

  return (
    <div className="pricing-logic | space-y-10">
      <div className="space-x-5 text-center">
        <button
          className={`button | rounded-xl px-5 py-2 md:px-4 lg:px-5
          ${pricingChoice === thirtyMinuteData ? "bg-blue" : "bg-darkGrey"}
          ${
            pricingChoice === thirtyMinuteData
              ? "hover:text-brown"
              : "hover:text-blue"
          }
          text-offWhite md:text-lg lg:text-lg w-20 md:w-28 lg:w-32 mx-auto`}
          onClick={setPricingToThirtyyMinuteData}
        >
          <span className="md:hidden lg:hidden">30</span>
          <span className="hidden md:block lg:block">30 mins</span>
        </button>
        <button
          className={`button | rounded-xl px-5 py-2 md:px-4 lg:px-5 ${
            pricingChoice === sixtyMinuteData ? "bg-blue" : "bg-darkGrey"
          }
          ${
            pricingChoice === sixtyMinuteData
              ? "hover:text-brown"
              : "hover:text-blue"
          }
          text-offWhite md:text-lg lg:text-lg w-20 md:w-28 lg:w-32 mx-auto`}
          onClick={setPricingToSixtyMinuteData}
        >
          <span className="md:hidden lg:hidden">60</span>
          <span className="hidden md:block lg:block">60 mins</span>
        </button>
        <button
          className={`button | rounded-xl px-3 py-2 md:px-4 lg:px-5 ${
            pricingChoice === groupData ? "bg-blue" : "bg-darkGrey"
          } 
          ${
            pricingChoice === groupData ? "hover:text-brown" : "hover:text-blue"
          }
          text-offWhite md:text-lg lg:text-lg w-20 md:w-28 lg:w-32 mx-auto`}
          onClick={setPricingToGroupData}
        >
          Group
        </button>
      </div>

      <div className="space-x-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mx-auto justify-items-center">
          {pricingChoice.map((price: any) => (
            <PricingCard
              key={price.id}
              tier={price.level}
              type={price.type}
              price={price.price}
              length={price.lesson_length}
              weeklyLessons={price.classes}
              monthlyLessons={price.lessons_per_month}
              numberOfStudents={price.numberOfStudents}
              offer={price.offer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
