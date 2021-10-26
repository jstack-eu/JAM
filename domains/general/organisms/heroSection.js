import React, { useState, useRef } from "react";
import theme from "../../../styles/theme";
import RichText from "../molecules/richText";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import {invertColor} from '../services/colors';

const HeroSection = ({
  title,
  buttonText,
  buttonLink,
  content,
  images,
}) => {
  const [carouselItem, setCarouselItem] = useState(0);
  let carousel = useRef(null);

  return (
    <div className="h-wrapper">
      <div className="flex row">
        <div className="left">
          <div className="leftInner">
            <Carousel
              ref={(el) => (carousel = el)} // useRef
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              selectedItem={carouselItem}
              interval={8000}
              onChange={(e) => {
                setCarouselItem(e);
                setTimeout(() => {
                  if (e === images.length - 1 && carousel) {
                    setCarouselItem(0);
                  }
                }, 8000);
              }}
            >
              {images.map((image, i) => {
                const url = image?.fields?.file?.url;
                if (!url) return;
                return (
                  <div className="valign" key={i}>
                    <img height="440" className="imgStyle" src={url} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="carouselBackground"></div>

        <div className="h-right">
          <div className="h-right-inner">
            <div className="title">{title}</div>
            <RichText content={content} />
            {buttonText && buttonLink && (
              <a href={`/${buttonLink}`} className="cta">
                {buttonText}
                <i className="fa fa-chevron-circle-right"></i>
              </a>
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
          color: #075206;
          border-radius: 6px;
          font-weight: 600;
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          -webkit-transition: all 0.2s linear;
          -moz-transition: all 0.2s linear;
          -o-transition: all 0.2s linear;
          transition: all 0.2s linear;
        }
        .cta:hover {
          background: #11880f;
          color: white;
        }
        .fa-chevron-circle-right {
          font-size: 24px;
          margin-left: 8px;
          padding-top: 2px;
        }
        .h-wrapper {
          margin-bottom: 32px;
          --height: 108px;
        }
        .flex {
          flex: 1;
        }
        .row {
          flex-direction: row;
          padding-top: ${theme.margin.l};
          position: relative;
        }
        .slider {
          align-items: center;
        }
        .h-right {
          flex: 0.5;
          color: ${theme.color.inversedText};
          padding-left: ${theme.margin.l};
          padding-right: ${theme.margin.l};
        }
        .h-right-inner {
          padding: ${theme.margin.ml} ${theme.margin.l};
          width: ${theme.layout.containerWidth.split("px")[0] / 2}px;
        }
        .imgStyle {
          max-height: 500px !important;
          object-fit: cover !important;
          width: auto;
        }
        .carouselBackground {
          background-image: -webkit-linear-gradient(
              left,
              rgba(1, 53, 127, 1),
              rgba(7, 114, 163, 0.8)
            ),
            url("images/static-product.jpg");
          background-size: cover;
          position: absolute;
          left: 33%;
          /* height: 122%; */
          height: calc(var(--height) + 100%);
          width: 67%;
          top: -80px;
          z-index: -1;
        }
        .left {
          max-height: 500px;
          flex: 0.5;
          position: relative;
        }
        .leftInner {
          max-height: 500px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
            0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
            0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
            0 32px 64px rgba(0, 0, 0, 0.07);
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
        .title {
          font-family: "ArchivoBlack", sans-serif;
          font-size: 32px;
          line-height: 42px;
          color: ${theme.color.inversedText};
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
        @media screen and (max-width: ${theme.media.s}px) {
          .h-right-inner {
            width: 100% !important;
          }
        }
        @media screen and (max-width: ${theme.media.l}px) {
          .h-right-inner {
            padding-left: 0;
            padding-right: 0;
            padding-top: 48px;
          }
          .row {
            flex-direction: column;
            padding-top: 0;
          }
          .wrapper {
            margin-bottom: 32px;
          }
          .left {
            display: none;
          }
          .right {
            padding-top: ${theme.margin.xl};
          }
          .right-inner {
            width: 100%;
          }
          .carouselBackground {
            width: 100%;
            left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
