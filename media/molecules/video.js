export const Video = ({ children, ...props }) => {
  console.log("VIDEO");
  return (
    <div className="video-container">
      <video controls>
        <source
          src={props.node.data.target.fields.file.url}
          type={props.node.data.target.fields.file.contentType}
        />
      </video>
      <style jsx>{`
        video {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Video;
