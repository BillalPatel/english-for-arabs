import React from "react";
import Link from "next/link";
import Image from "next/image";

import { VideoBox } from "../components/VideoBox";

// import "../app/globals.css";

export default function Video() {
  return (
    // <Link href={""} />
    <div className="temp-video-page" id="">
      <h1 className="text-2xl ">This is the video page</h1>
      <section className="video-section | my-16">
        <div className="video-box | flex flex-row mx-auto justify-center self-center">
          <VideoBox videoLink={"https://www.youtube.com/embed/Bnzt9NM3EC4"} />
        </div>
        <h1>English Course</h1>
        <h2>Lesson 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus
          excepturi quos dolores.
        </p>
      </section>
      <section className="translation-section | ">
        <h2></h2>
      </section>
    </div>
  );
}
