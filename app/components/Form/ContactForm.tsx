"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = function (data) {
    console.log(data);

    emailjs
      .sendForm("service_yuh4t7w", "template_6js6ypl", form.current, {
        publicKey: "pNxkKYMTbhrNse7Hq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="gap-1 space-y-6 flex flex-col justify-items-center justify-self-center place-content-center md:w-4/6 lg:w-4/6 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <Input
          {...register("firstName", {
            required: "Please enter your first name",
            minLength: 3,
          })}
          label={"First name"}
          id={"firstName"}
          placeholder="Enter your first name"
        />
        {errors.firstName && (
          <p className="text-red text-sm">{errors.firstName?.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register("lastName", {
            required: "Please enter your last name",
            minLength: 3,
          })}
          label={"Last name"}
          id={"lastName"}
          placeholder="Enter your last name"
        />
        {errors.lastName && (
          <p className="text-red text-sm">{errors.lastName?.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register("email", {
            required: "Please enter your email address",
            minLength: 3,
          })}
          label={"Email address"}
          id={"emailAddress"}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-red text-sm">{errors.email?.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register("mobile", {
            required: "Please enter your mobile number",
            minLength: 3,
          })}
          label={"Mobile number"}
          id={"mobileNumber"}
          placeholder="Enter your mobile number"
        />
        {errors.mobile && (
          <p className="text-red text-sm">{errors.mobile?.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <TextArea
          {...register("message", {
            required: "Please enter a message",
            minLength: 3,
          })}
          label={"Message"}
          id={"message"}
          placeholder="Provide details of the course and teacher you prefer"
        />
        {errors.message && (
          <p className="text-red text-sm">{errors.message?.message}</p>
        )}
      </div>

      <button className="button | rounded-xl px-5 py-3 md:py-4 lg:py-3 md:px-7 lg:px-7 bg-black hover:text-black text-offWhite w-full md:w-40 lg:w-40 mx-auto">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
