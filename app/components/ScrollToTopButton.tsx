import Image from "next/image";
import React, { useState, useEffect } from "react";
import arrowUpIcon from "../../assets/icons/arrow-up.svg";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {isVisible && (
        <button
          className="z-40 fixed bottom-12 right-10 bg-blue text-white font-bold rounded opacity-90 hover:opacity-100 hover:scale-110 duration-300"
          onClick={scrollToTop}
        >
          <p className="block px-4 py-2">Top</p>
        </button>
      )}
    </div>
  );
}
