export const YoutubeVideo = ({ children, ...props }) => {
  console.log("YOUTUBE");
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${props.fileName.split("watch?v=")[1]}`}
        height="800px"
        width="100%"
        frameBorder="0"
        scrolling="no"
        title={props?.node?.data?.target?.fields?.title}
        allowFullScreen={true}
      />
      <style jsx>{`
        .video-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .video-container::after {
          padding-top: 56.25%;
          display: block;
          content: "";
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default YoutubeVideo;
