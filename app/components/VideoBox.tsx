interface VideoBoxProps {
  videoLink: string;
  title?: string;
}

export function VideoBox(props: VideoBoxProps) {
  const { videoLink, title } = props;
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full duration-300 border-4 hover:border-gold rounded-2xl solid border-grey"
        // width="1500"
        // height="844"
        src="https://www.youtube.com/embed/eWwN726sO90?rel=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share frameborder"
        allowFullScreen
      ></iframe>
    </div>
  );
}
