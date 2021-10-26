import SectionGenerator from "./sectionGenerator";

export const SectionsGenerator = ({ data, realisations, locale }) => {
  return (
    <div className="blocks-container">
      {data.map((item, i) => {
        const type = item.sys.contentType.sys.id;
        return (
          <SectionGenerator
            locale={locale}
            realisations={realisations}
            key={i}
            index={i}
            fields={item.fields}
            type={type}
          />
        );
      })}
      <style jsx>{``}</style>
    </div>
  );
};

export default SectionsGenerator;
