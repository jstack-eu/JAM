import theme from "../styles/theme";
import ContentBlock from "../organisms/contentBlock";

export const BlockRender = ({ fields, type }) => {
  const backgroundColor = fields.backgroundColor;
  return (
    <div>
      {type === "textBlock" && (
        <div className="block-container-wrapper">
          <div className="block-container">
            <ContentBlock
              title={fields.title}
              content={fields.content}
              contentRight={fields.contentRight}
              backgroundColor={backgroundColor}
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .block-container-wrapper {
          padding: 26px 0;
          background-color: ${theme.color[backgroundColor]};
        }
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
