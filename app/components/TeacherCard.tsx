import React, { useState } from "react";
import Image from "next/image";
import teacherImage from "../../assets/ahmed.jpeg";
import expandVideoIcon from "../../assets/expand-link.svg";

export default function TeacherCard() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  function handleExpandVideoClick() {
    setShowVideoModal(true);
  }

  function closeModal() {
    setShowVideoModal(false);
  }

  //   return (
  //     <div className="flex flex-col justify-center justify-items-center lg:max-w-sm py-4 space-y-3 border-2 rounded-lg">
  //       <h2 className="text-2xl">Ahmed Mounir</h2>
  //       <Image
  //         className="w-36 h-36 rounded-lg mx-auto"
  //         src={teacherImage}
  //         alt="Teacher"
  //       />
  //       <div
  //         className="flex flex-row space-x-2 mx-auto hover:opacity-50 cursor-pointer"
  //         onClick={handleExpandVideoClick}
  //       >
  //         <Image src={expandVideoIcon} alt={"Open link"} />
  //         <p className="text-sm">See video</p>
  //       </div>
  //       <ul className="text-sm list-disc text-left mx-auto">
  //         <li>Studied at Al-Azhar Academy</li>
  //         <li>Specialises in Qur'an and Arabic</li>
  //         <li>A very good guy ;)</li>
  //       </ul>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col justify-center justify-items-center lg:max-w-sm py-4 space-y-3 border-2 rounded-lg">
      <h2 className="text-2xl">Ahmed Mounir</h2>
      <Image
        className="w-48 h-48 lg:w-36 lg:h-36 rounded-lg mx-auto"
        src={teacherImage}
        alt="Teacher"
      />
      <div
        className="flex flex-row space-x-2 mx-auto hover:opacity-50 cursor-pointer"
        onClick={handleExpandVideoClick}
      >
        <Image src={expandVideoIcon} alt={"Open link"} />
        <p className="text-sm">See video</p>
      </div>
      <ul className="text-lg md:text-base lg:text-sm list-disc text-left mx-auto">
        <li>Studied at Al-Azhar Academy</li>
        <li>Specialises in Qur'an and Arabic</li>
        <li>A very good guy ;)</li>
      </ul>

      {showVideoModal && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-darkGrey top-0">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative z-50 bg-white p-4 w-full max-w-2xl rounded-xl">
            <div className="aspect-video">
              <iframe
                title="YouTube video"
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/eWwN726sO90?rel=0&enablejsapi=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <button
            className="absolute bottom-0 left-0 right-0 mx-auto text-white hover:text-black z-50 bg-black p-5 max-w-sm rounded-xl"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
