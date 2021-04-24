import theme from "../styles/theme";
import ContentBlock from "../organisms/contentBlock";
import BlockRender from "./blockRender";

export const BlocksRender = ({ data }) => {
  // console.log('data: ', data);
  return (
    <div className="blocks-container">
      {data.map((item, i) => {
        const type = item.sys.contentType.sys.id;
        return (
          <BlockRender key={i} fields={item.fields} type={type} />
        );
      })}

      <style jsx>{``}</style>
    </div>
  );
};

export default BlocksRender;
