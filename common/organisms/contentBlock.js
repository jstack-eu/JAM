import React, { useState } from "react";
import theme from "../styles/theme";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const ContentBlock = ({ title, content, backgroundColor }) => {
  const invertColor = (hex) => {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 186
      ? theme.color.text
      : theme.color.inversedText;
  };

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const fileName = node.data.target.fields.file.fileName;
        if (node.data.target.fields.file.contentType.includes("video")) {
          return (
            <div className="video-container">
              <video controls>
                <source
                  src={node.data.target.fields.file.url}
                  type={node.data.target.fields.file.contentType}
                />
              </video>
              <style jsx>{`
                video {
                  width: 100%;
                  height: auto;
                }
              `}</style>
            </div>
          );
        }

        if (
          node.data.target.fields.file.contentType.includes("text/html") &&
          fileName.includes("watch?v=")
        ) {
          return (
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${
                  fileName.split("watch?v=")[1]
                }`}
                height="800px"
                width="100%"
                frameBorder="0"
                scrolling="no"
                title={node.data.target.fields.title}
                allowFullScreen={true}
              />
              <style jsx>{`
                .video-container {
                  overflow: hidden;
                  position: relative;
                  width: 100%;
                }

                .video-container::after {
                  padding-top: 56.25%;
                  display: block;
                  content: "";
                }

                .video-container iframe {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                }
              `}</style>
            </div>
          );
        }
        if (node.data.target.fields.file) {
          return (
            <img
              src={`https://${node.data.target.fields.file.url}`}
              width="100%"
              alt={node.data.target.fields.description}
            />
          );
        }

        return <div>Media not loaded (!)</div>;
      },
    },
  };

  console.log("COLOR: ", theme.color);

  const color = backgroundColor
    ? invertColor(theme.color[backgroundColor])
    : "black";

  return (
    <div className="wrapper">
      <h1>{title}</h1>
      {renderRichText(content, renderOptions)}
      <style jsx>{`
        p {
          color: ${color};
        }
        h1 {
          color: ${color};
        }
        .wrapper {
          color: ${color};
        }
      `}</style>
    </div>
  );
};

export default ContentBlock;
