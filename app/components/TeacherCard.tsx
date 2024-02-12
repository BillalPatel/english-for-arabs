import React, { useState } from "react";
import Image from "next/image";
import teacherImage from "../../assets/teachers/profile/ahmed.jpeg";
import teacherVideoImage from "../../assets/teachers/video/sheikh-mahmoud.jpg";
import openLinkIcon from "../../assets/icons/open-link.svg";
import videoIcon from "../../assets/icons/video.svg";

export default function TeacherCard() {
  const [showYouTubeVideoModal, setShowYouTubeVideoModal] = useState(false);
  const [showProfileVideoModal, setShowProfileVideoModal] = useState(false);

  function handleExpandVideoClick() {
    setShowYouTubeVideoModal(true);
  }

  function closeYouTubeModal() {
    setShowYouTubeVideoModal(false);
  }

  function handleExpandProfileClick() {
    setShowProfileVideoModal(true);
  }

  function closeProfileVideoModal() {
    setShowProfileVideoModal(false);
  }

  return (
    // <div className="flex flex-col justify-center justify-items-center lg:max-w-sm py-5 space-y-3 border-2 rounded-lg hover:scale-105 duration-300 border-blue">
    <div className="relative lg:max-w-sm py-5 space-y-3 border-2 rounded-lg hover:scale-105 duration-300 border-blue">
      <h2 className="text-2xl font-bold">Ahmed Mounir</h2>
      <Image
        className="w-48 h-48 lg:w-36 lg:h-36 rounded-full mx-auto"
        src={teacherImage}
        alt="Teacher"
      />
      <div className="space-y-1 mx-auto">
        <div
          className="flex flex-row justify-center space-x-2 mx-auto hover:opacity-50 cursor-pointer"
          onClick={handleExpandProfileClick}
        >
          <Image src={openLinkIcon} alt="Open link" />
          <p className="">View profile</p>
        </div>
        <div
          className="flex flex-row justify-center space-x-2 mx-auto hover:opacity-50 cursor-pointer"
          onClick={handleExpandVideoClick}
        >
          <Image src={videoIcon} alt="Open video" />
          <p className="">See video</p>
        </div>
      </div>
      <ul className="lg:text-lg list-disc text-left flex flex-col marker:text-brown overflow-auto list-inside">
        <li className="mx-auto">Studied at Al-Azhar Academy</li>
        <li className="mx-auto">{"Specialises in Qur'an and Arabic"}</li>
        <li className="mx-auto">A very good guy ;)</li>
      </ul>

      {showYouTubeVideoModal && (
        // <div className="fixed inset-0 flex items-center justify-center z-40 bg-opacity-50 top-0">
        <div className="youtube-popup | fixed top-0 left-0 w-full h-full bg-darkGrey flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-darkGrey opacity-75"></div>
          <div className="relative z-50 bg-opacity-50 p-4 w-full max-w-2xl rounded-xl">
            <div className="aspect-video">
              <iframe
                title="YouTube video"
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/eWwN726sO90?rel=0&enablejsapi=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <button
            className="absolute bottom-20 left-0 right-0 rounded-xl px-5 py-2 md:px-4 lg:px-5 bg-blue hover:text-brown text-offWhite md:text-lg lg:text-lg w-40 md:w-28 lg:w-28 mx-auto"
            onClick={closeYouTubeModal}
          >
            Close
          </button>
        </div>
      )}

      {showProfileVideoModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 top-0">
          <div className="absolute bg-darkGrey opacity-100"></div>
          <div className="relative z-50 bg-opacity-50 p-4 w-full max-w-2xl rounded-xl">
            <div className="">
              <Image src={teacherVideoImage} alt="Profile" />
            </div>
          </div>
          <button
            className="absolute bottom-20 left-0 right-0 rounded-xl px-5 py-2 md:px-4 lg:px-5 bg-blue hover:text-brown text-offWhite md:text-lg lg:text-lg w-40 md:w-28 lg:w-28 mx-auto"
            onClick={closeProfileVideoModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
