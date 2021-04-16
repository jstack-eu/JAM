import theme from "../styles/theme";
import ContentBlock from "../organisms/contentBlock";
import BlockRender from "./blockRender";

export const BlocksRender = ({ data }) => {
  return (
    <div className="blocks-container">
      {data.map((item) => {
        const type = item.sys.contentType.sys.id;
        return (
          <BlockRender fields={item.fields} type={type} />
        );
      })}

      <style jsx>{``}</style>
    </div>
  );
};

export default BlocksRender;
