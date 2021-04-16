import React, { useState } from "react";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const ContentBlock = ({ title, content }) => {
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

  return (
    <div>
      <h1>{title}</h1>
      {renderRichText(content, renderOptions)}
      <style jsx>{``}</style>
    </div>
  );
};

export default ContentBlock;
