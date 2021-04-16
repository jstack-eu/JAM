import theme from "../styles/theme";
import ContentBlock from "../organisms/contentBlock";

export const BlockRender = ({ data }) => {
  return (
    <div className="block-container">
      {data.map((item) => {
        const type = item.sys.contentType.sys.id;
        return (
          <>
            {type === "textBlock" && (
              <ContentBlock
                title={item.fields.title}
                content={item.fields.content}
              />
            )}
          </>
        );
      })}

      <style jsx>{`
        .block-container {
          width: ${theme.layout.containerWidth};
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (max-width: ${theme.layout.containerWidth}) {
          .block-container {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlockRender;
