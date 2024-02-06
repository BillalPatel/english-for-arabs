import { Button } from "@/app/components/Button";

export default function Prices() {
  return (
    <div className="space-y-20">
      <section className="prices | text-3xl text-center space-y-6">
        <h1 className="">Choose your plan</h1>
        <h3 className="text-lg">
          Get access to our comprehensive Islamic studies courses. Choose a plan
          that suits you best.
        </h3>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          vero explicabo earum ipsam eum sequi consequatur quidem consequuntur
          voluptatibus, ratione sunt quam sapiente nihil officia nostrum dolorum
          odio ipsa cumque!
        </p>
      </section>

      <section className="space-x-4">
        <div className="flex flex-col md:flex-row lg:flex-row mx-auto justify-evenly gap-y-10">
          <div className="pricing-card | max-w-sm border py-12 px-14 rounded space-y-4 text-center mx-auto">
            <h2 className="text-3xl">Basic</h2>
            <h3 className="text-xl font-bold">$10</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas
              amet deleniti nulla.
            </p>
            <Button buttonText={"Find out more"} />
          </div>
          <div className="pricing-card | max-w-sm border py-12 px-14 rounded space-y-4 text-center mx-auto">
            <h2 className="text-3xl">Intermediate</h2>
            <h3 className="text-xl font-bold">$20</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas
              amet deleniti nulla.
            </p>
            <Button buttonText={"Find out more"} />
          </div>
          <div className="pricing-card | max-w-sm border py-12 px-14 rounded space-y-4 text-center mx-auto">
            <h2 className="text-3xl">Advanced</h2>
            <h3 className="text-xl font-bold">$30</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas
              amet deleniti nulla.
            </p>
            <Button buttonText={"Find out more"} />
          </div>
        </div>
      </section>
    </div>
  );
}
