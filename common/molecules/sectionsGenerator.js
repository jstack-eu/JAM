import SectionGenerator from "./sectionGenerator";

export const SectionsGenerator = ({ data }) => {
  if (!data) return null;

  return (
    <div className="blocks-container">
      {data.map((item, i) => {
        console.log('TEST?')
        const type = item.sys.contentType.sys.id;
        return <SectionGenerator key={i} fields={item.fields} type={type} />;
      })}

      <style jsx>{``}</style>
    </div>
  );
};

export default SectionsGenerator;
