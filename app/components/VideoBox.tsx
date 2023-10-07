interface VideoBoxProps {
  videoLink: string;
  title?: string;
}

export function VideoBox(props: VideoBoxProps) {
  const { videoLink, title } = props;
  return (
    <div className="relative w-full">
      <iframe
        className="duration-300 border-4 hover:border-gold rounded-2xl solid border-grey"
        width="1500"
        height="844"
        src="https://www.youtube.com/embed/eWwN726sO90?rel=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
