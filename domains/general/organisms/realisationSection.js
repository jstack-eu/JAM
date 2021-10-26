import React, { useState, useEffect } from "react";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import RichText from "../../general/molecules/richText";

const RealisationsSection = ({ title, realisations }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setIsTablet(window.innerWidth < 1240);
        setIsMobile(window.innerWidth < 768);
      });
      setIsTablet(window.innerWidth < 1240);
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${
            isMobile ? 1 : isTablet ? 2 : 3
          }, 1fr)`,
          gridGap: 36,
        }}
      >
        {realisations.map((r, i) => (
          <a key={i} href={`/realisations/${r.fields.slug}`}>
            <div className="card">
              <div className="img-wrapper">
                <img
                  className="img"
                  src={
                    r?.fields?.image?.fields?.file
                      ? r.fields.image.fields.file.url
                      : "logo.png"
                  }
                />
              </div>
              <div className="card-title">{r.fields.title}</div>
              <RichText content={r.fields.content} />
              <div className="footer">
                {/* TODO: translate manually */}
                <div>Lees meer</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: initial;
        }
        .title {
          margin-bottom: ${theme.margin.xl};
          font-family: "ArchivoBlack", sans-serif;
          font-size: 32px;
          line-height: 42px;
          color: ${theme.color.primary};
          border-left: 8px solid #ec6b06;
          padding-left: 12px;
        }
        .card-title {
          font-size: 24px;
          margin-top: 16px;
          margin-bottom: -8px;
        }
        .wrapper {
          padding-top: ${theme.margin.xxxl};
          padding-bottom: ${theme.margin.xxxl};
        }
        .footer {
          position: absolute;
          background: #fff;
          width: 100%;
          bottom: 0;
          height: 40px;
          box-shadow: 0 -8px 28px 8px #fff;
          border-top: 1px solid #ffecd7;
        }
        .card {
          padding: 12px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
          position: relative;
          height: 560px;
          overflow: hidden;
          border-radius: 6px;
        }
        .card:hover {
          cursor: pointer;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
        }
        .img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          left: 0;
          top: 0;
          position: absolute;
          height: 286px;
        }
        .img-wrapper {
          left: 0;
          height: 274px;
        }
        .footer {
          left: 0;
          padding-right: 12px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: ${theme.color.secondaryM};
        }
        @media screen and (max-width: ${theme.media.l}px) { 
          .wrapper {
          padding-top: ${theme.margin.xl};
          padding-bottom: ${theme.margin.xxxl};
        }
        }
      `}</style>
    </div>
  );
};

export default RealisationsSection;
