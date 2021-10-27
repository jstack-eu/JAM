import React, { useState, useEffect } from "react";
import theme from "../../../styles/theme";
import RichText from "../molecules/richText";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselBlock from "../molecules/carousel";
// import {invertColor} from '../services/colors';

const CarouselSection = ({
  name,
  title,
  titleLink,
  content,
  images,
  isCarouselLeft,
  buttonText,
  buttonLink,
  locale,
}) => {
  const [vw, setVw] = useState(null);
  const [isCL, setIsCL] = useState(isCarouselLeft);
  const [isMobile, setIsMobile] = useState(isCarouselLeft);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setVw(window.innerWidth);
        setIsCL(window.innerWidth < 1240 ? false : isCarouselLeft);
        setIsMobile(window.innerWidth < 1240);
      });
      setVw(window.innerWidth);
      setIsCL(window.innerWidth < 1240 ? false : isCarouselLeft);
      setIsMobile(window.innerWidth < 1240);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="flex row">
        <div className="left">
          {isCL && (
            <>
              <CarouselBlock images={images} />
              <div className="carouselBackground"></div>
            </>
          )}
          {!isCL && (
            <div className="txtWrapper">
              <div className="subtitle">{title}</div>
              <RichText content={content} />
              {buttonText && buttonLink && (
                <a href={`/${buttonLink}`} className="cta">
                  {buttonText}
                  <i className="fa fa-chevron-circle-right"></i>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="right">
          <div className="right-inner">
            {!isCL && (
              <>
                <CarouselBlock images={images} />
                <div className="carouselBackground"></div>
              </>
            )}
            {isCL && (
              <div className="txtWrapper">
                <div className="subtitle">{title}</div>
                <RichText content={content} />
                {buttonText && buttonLink && (
                  <a href={`/${buttonLink}`} className="cta">
                    {buttonText}
                    <i className="cta-icon fa fa-chevron-circle-right"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .cta {
          text-decoration: none;
          background: rgba(146, 255, 144, 0.95);
          padding: 8px;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-top: 24px;
          color: #075206;
          border-radius: 6px;
          font-weight: 600;

          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          -webkit-transition: all 0.2s linear;
          -moz-transition: all 0.2s linear;
          -o-transition: all 0.2s linear;
          transition: all 0.2s linear;
        }
        .fa-chevron-circle-right {
          font-size: 24px;
          margin-left: 8px;
          padding-top: 2px;
        }
        .cta:hover {
          background: #11880f;
          color: white;
        }
        .wrapper {
          padding-top: ${theme.margin.xxxl};
          padding-bottom: ${theme.margin.xxxl};
        }
        .titleLink {
          text-decoration: none;
        }
        .titleLink .subtitle:hover {
          color: ${theme.color.secondaryM};
          -webkit-transition: all 0.1s linear;
          -moz-transition: all 0.1s linear;
          -o-transition: all 0.1s linear;
          transition: all 0.1s linear;
        }
        .flex {
          flex: 1;
        }
        .txtWrapper {
          padding: ${theme.margin.ml} 0;
        }
        .carouselBackground {
          background: -webkit-linear-gradient(
            left,
            rgba(1, 53, 127, 1),
            rgba(7, 114, 163, 0.85)
          );
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 1;
          left: 16px;
          top: 16px;
        }
        .left > .carouselBackground {
          left: -16px;
        }
        .right > .carouselBackground {
          left: 16px;
        }
        .titleWrapper {
          display: flex;
          flex-direction: row;
        }
        .row {
          flex-direction: row;
          position: relative;
        }
        .slider {
          align-items: center;
        }
        .right {
          flex: 0.5;
          position: relative;
          margin-left: ${theme.margin.ml};
        }
        .left {
          flex: 0.5;
          position: relative;
          margin-right: ${theme.margin.ml};
        }
        .right-inner {
          position: relative;
        }
        .valign {
          align-items: center;
          height: 100%;
          display: flex;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .subtitle {
          font-family: "ArchivoBlack", sans-serif;
          font-size: 32px;
          line-height: 42px;
          color: ${theme.color.primary};
          border-left: 8px solid #ec6b06;
          padding-left: 12px;
        }
        @media screen and (min-width: ${theme.media.xl}px) {
          .right {
            flex: 0.5;
          }
          .left {
            flex: 0.5;
          }
        }
        @media screen and (min-width: ${theme.media.l}px) {
          .wrapper {
            margin-left: ${theme.margin.l};
            margin-right: ${theme.margin.l};
          }
        }
        @media screen and (max-width: ${theme.media.l}px) {
          .row {
            flex-direction: column;
            padding-top: 0;
          }
          .right {
            margin-left: -${theme.margin.ml};
            margin-right: -${theme.margin.ml};
          }
          .wrapper {
            padding-top: ${theme.margin.xl};
            padding-bottom: 0;
          }
          .carouselBackground {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselSection;
