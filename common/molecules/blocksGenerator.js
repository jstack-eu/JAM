import BlockGenerator from "./blockGenerator";

export const BlocksGenerator = ({ data }) => {
  return (
    <div className="blocks-container">
      {data.map((item, i) => {
        const type = item.sys.contentType.sys.id;
        return (
          <BlockGenerator key={i} fields={item.fields} type={type} />
        );
      })}

      <style jsx>{``}</style>
    </div>
  );
};

export default BlocksGenerator;
