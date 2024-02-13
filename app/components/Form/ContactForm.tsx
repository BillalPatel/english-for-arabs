"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "../Button";

const schema = z.object({
  firstName: z.string().min(3, "Please enter your first name"),
  lastName: z.string().min(3, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.coerce.number().min(5, "Please enter your mobile number"),
  course: z.string().min(3, "Please enter your course"),
  message: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async function (data) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        from_email: data.email,
        mobile: data.mobile,
        course: data.course,
        message: data.message,
      };

      emailjs
        .send(
          process.env.EMAIL_JS_SERVICE_ID,
          process.env.EMAIL_JS_TEMPLATE_ID,
          templateParams,
          process.env.EMAIL_JS_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
          setIsSuccessMessageVisible(true);
        });

      reset();
    } catch (error) {
      console.error("Something went wrong.");
    }
  };

  return (
    <form
      className="gap-1 space-y-6 flex flex-col justify-items-center justify-self-center place-content-center md:w-4/6 lg:w-4/6 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4">
        <div className="flex justify-center flex-col justify-items-center justify-self-center place-self-center space-y-2">
          <label
            htmlFor={"firstName"}
            className="block text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            First name
          </label>
          <input
            {...register("firstName")}
            type={"text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={"Enter your first name"}
          />
          {errors.firstName && (
            <p className="text-red text-sm">{errors.firstName?.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex justify-center flex-col justify-items-center justify-self-center place-self-center space-y-2">
            <label
              htmlFor={"lastName"}
              className="block text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Last name
            </label>
            <input
              {...register("lastName")}
              type={"text"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={"Enter your last name"}
            />
            {errors.lastName && (
              <p className="text-red text-sm">{errors.lastName?.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center flex-col justify-items-center justify-self-center place-self-center space-y-2">
          <label
            htmlFor={"email"}
            className="block text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Email address
          </label>
          <input
            {...register("email")}
            type={"text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={"Enter your email address"}
            autoComplete="on"
          />
          {errors.email && (
            <p className="text-red text-sm">{errors.email?.message}</p>
          )}
        </div>

        <div className="flex justify-center flex-col justify-items-center justify-self-center place-self-center space-y-2">
          <label
            htmlFor={"mobile"}
            className="block text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Mobile
          </label>
          <input
            {...register("mobile")}
            type={"text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={"Enter your mobile number"}
          />
          {errors.mobile && (
            <p className="text-red text-sm">{errors.mobile?.message}</p>
          )}
        </div>

        <div className="flex justify-center flex-col justify-items-center justify-self-center place-self-center space-y-2">
          <label
            htmlFor={"course"}
            className="block text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Course
          </label>
          <input
            {...register("course")}
            type={"text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={"Specify the course you prefer"}
          />
          {errors.course && (
            <p className="text-red text-sm">{errors.course?.message}</p>
          )}
        </div>

        <div className="flex justify-center flex-col justify-items-center justify-self-center place-self-center space-y-2">
          <label
            htmlFor={"message"}
            className="block text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            rows={3}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={"Add any additional information"}
          />
          {errors.message && (
            <p className="text-red text-sm">{errors.message?.message}</p>
          )}
        </div>
      </div>

      {isSuccessMessageVisible ? (
        <div className="mx-auto text-center text-blue text-xl space-y-1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 15 15"

            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto my-2"
          >
            <path
              d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
              fill="#C2912E"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>

          <h4>Form sent successfully.</h4>
          <h4>We will be in touch soon!</h4>
        </div>
      ) : null}

      <Button
        buttonText={
          isSubmitting ? (
            <div className="flex flex-row">
              <svg
                aria-hidden="true"
                role="status"
                className="w-6 h-6 text-brown animate-spin text-center mx-auto"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                ></path>
              </svg>
            </div>
          ) : (
            "Submit"
          )
        }
        width="full"
      />
    </form>
  );
}
