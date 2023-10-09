import React from "react";
import Link from "next/link";
import Image from "next/image";

import { VideoBox } from "../components/VideoBox";

// import "../app/globals.css";

export default function Video() {
  return (
    <div className="temp-video-page | mt-6" id="">
      <h1 className="text-3xl font-bold">English Course</h1>
      <section className="video-section | my-10">
        <div className="video-box | flex flex-row justify-center self-center w-full">
          <VideoBox
            videoLink={"https://www.youtube.com/embed/eWwN726sO90?rel=0"}
          />
        </div>
        <div className="my-10 space-y-2">
          <h2 className="text-2xl font-semibold ">
            Improve your recitation | Surat Al-Ikhlas
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            ducimus excepturi quos dolores.
          </p>
        </div>
      </section>
      <section className="translation-section | space-y-2">
        <h2 className="text-2xl font-semibold ">Translation</h2>
        <p className="text-lg text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias
          perferendis sit, impedit quasi itaque, ipsam perspiciatis optio sunt,
          temporibus corrupti nihil exercitationem? Iusto voluptatem dignissimos
          facilis accusantium alias pariatur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Voluptates alias aperiam, quis odit quod
          quas molestiae, voluptatibus minus iusto esse quidem debitis nostrum
          voluptatem vero? Iste quibusdam unde aliquam neque. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aut rerum dolore accusamus
          soluta dolor, autem dolores, voluptas adipisci laboriosam beatae
          cumque fugiat delectus amet repellendus culpa vitae! Suscipit, placeat
          vitae!
          {<br />}
          {<br />}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          ullam quo eos quidem ipsum fugit alias nemo pariatur non architecto
          deleniti saepe, consequuntur, iusto quam quisquam odit! Dolor,
          asperiores libero. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laborum, ullam quo eos quidem ipsum fugit alias nemo pariatur
          non architecto deleniti saepe, consequuntur, iusto quam quisquam odit!
          Dolor, asperiores libero.
        </p>
      </section>
    </div>
  );
}
