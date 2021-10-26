import React, { useState, useRef } from "react";
import theme from "../../../styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSection = ({ images }) => {
  const [carouselItem, setCarouselItem] = useState(0);

  let carousel = useRef(null);

  return (
    <div className="wrapper">
      <Carousel
        ref={(el) => (carousel = el)} // useRef
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        selectedItem={carouselItem}
        interval={6000}
        onChange={(e) => {
          setCarouselItem(e);
          setTimeout(() => {
            if (e === images.length - 1 && carousel) {
              setCarouselItem(0);
            }
          }, 6000);
        }}
      >
        {images.map((image, i) => {
          const url = image?.fields?.file?.url;
          if (!url) return;
          return (
            <div className="imageWrapper" key={i}>
              <img height="400" className="image" src={url} />
            </div>
          );
        })}
      </Carousel>

      <style jsx>{`
        .slider {
          align-items: center;
        }
        .image {
          object-fit: cover;
        }
        .wrapper {
          position: relative;
          z-index: 2;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
            0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
            0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
            0 32px 64px rgba(0, 0, 0, 0.07);
        }
        @media screen and (min-width: ${theme.media.xl}px) {
        }
      `}</style>
    </div>
  );
};

export default CarouselSection;
