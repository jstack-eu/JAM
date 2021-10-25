import theme from "../styles/theme";
import BasicSection from "../organisms/basicSection";
import HeroSection from "../organisms/heroSection";
import CarouselSection from "../organisms/carouselSection";

export const SectionGenerator = ({
  fields,
  realisations,
  type,
  index,
  locale,
}) => {
  locale = "en";
  const backgroundColor = fields.backgroundColor;

  console.log("TYPE: ", type);

  const getPropByLocale = (fields, key) => {
    console.log(fields, key, locale);
    if (locale === "en") {
      return (
        fields[key] || fields[key + (locale[0].toUpperCase() + locale.slice(1))]
      );
    }

    return fields[key + (locale[0].toUpperCase() + locale.slice(1))];
  };
  return (
    <div>
      {type === "sectionHero" && (
        <HeroSection
          name={fields.title}
          title={getPropByLocale(fields, "title")}
          images={fields.images}
          content={getPropByLocale(fields, "content")}
          buttonText={getPropByLocale(fields, "button")}
          buttonLink={fields.buttonLink}
          icon={fields.icon}
          locale={locale}
        />
      )}
      {type === "section" && (
        <div className="block-container-wrapper">
          <div className="block-container">
            <BasicSection
              title={getPropByLocale(fields, "title")}
              content={getPropByLocale(fields, "content")}
              columns={fields.columns}
            />
          </div>
        </div>
      )}
      {type === "realisations" && (
        <div className="block-container-wrapper">
          <div className="block-container">
            <RealisationsSection
              title={getPropByLocale(fields, "title")}
              realisations={realisations}
            />
          </div>
        </div>
      )}
      {type === "sectionCarousel" && (
        <div
          className={`block-container-wrapper ${index % 2 === 0 && "grey-bg"}`}
        >
          <div className="block-container">
            <CarouselSection
              name={fields.title}
              titleLink={fields.titleLink}
              icon={fields.icon}
              title={getPropByLocale(fields, "title")}
              images={fields.images}
              content={getPropByLocale(fields, "content")}
              isCarouselLeft={index % 2 === 0}
              buttonText={getPropByLocale(fields, "button")}
              buttonLink={fields.buttonLink}
              locale={locale}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .block-container-wrapper {
          /* padding: ${theme.margin.ms} 0; */
          background-color: ${theme.color[backgroundColor]};
        }
        .grey-bg {
          background-color: ${theme.color.greyLL};
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
        @media screen and (max-width: ${theme.media.l}px) {
          .block-container {
            padding-left: ${theme.margin.l};
            padding-right: ${theme.margin.l};
          }
        }
      `}</style>
    </div>
  );
};

export default SectionGenerator;
