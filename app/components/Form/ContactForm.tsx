"use client";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async function (data) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
    } catch (error) {
      console.error("Something went wrong.");
    }

    // emailjs
    //   .sendForm("service_yuh4t7w", "template_6js6ypl", form.current, {
    //     publicKey: "pNxkKYMTbhrNse7Hq",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
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
