export const EmbeddedVideo = ({ children, ...props }) => {
    console.log('EMBEDDDDD')
  return (
    <iframe
      src={props.node.data.target.fields.embedUrl}
      height="100%"
      width="100%"
      frameBorder="0"
      scrolling="no"
      title={node.data.target.fields.title}
      allowFullScreen={true}
    />
  );
};

export default EmbeddedVideo;
