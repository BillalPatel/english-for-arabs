interface VideoBoxProps {
  videoLink: string;
  title?: string;
}

export function VideoBox(props: VideoBoxProps) {
  const { videoLink, title } = props;
  return (
    <div>
      <iframe
        width="1280"
        height="720"
        src={videoLink}
        // title="دورة الإسلامك الشاملة   مباشرة على الزوم"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
