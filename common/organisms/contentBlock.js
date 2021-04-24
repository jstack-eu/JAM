import React, { useState } from "react";
import theme from "../styles/theme";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import EmbeddedVideo from "../../media/molecules/embeddedVideo";
import Video from "../../media/molecules/video";
import YoutubeVideo from "../../media/molecules/YoutubeVideo";
import { invertColor } from "../services/colors";

const ContentBlock = ({ title, content, contentRight, backgroundColor }) => {
  console.log("CONTENT: ", content);
  console.log("contentRIGHT", contentRight);

  const checkTypeId = (node, id) =>
    node?.data?.target?.sys?.contentType?.sys?.id === id;

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // Not sure if this ever gets loaded, consider it a backup
        if (checkTypeId(node, "videoEmbed")) {
          return <EmbeddedVideo node={node} />;
        }
        if (checkTypeId(node, "button")) {
          return (
            <button>
              <a href={node.data.target.fields.url
              }>
                {node.data.target.fields.label}
              </a>
            </button>
          );
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const fileName = node?.data?.target?.fields?.file?.fileName;
        if (node?.data?.target?.fields?.file?.contentType?.includes("video")) {
          return <Video node={node} />;
        }

        if (
          node?.data?.target?.fields?.file?.contentType?.includes(
            "text/html"
          ) &&
          fileName.includes("watch?v=")
        ) {
          return <YoutubeVideo node={node} fileName={fileName} />;
        }
        if (node?.data?.target?.fields?.file) {
          return (
            <img
              src={`https://${node.data.target.fields.file.url}`}
              width="100%"
              alt={node?.data?.target?.fields?.description}
            />
          );
        }

        return <div>Component not loaded (!)</div>;
      },
    },
  };

  const color = backgroundColor
    ? invertColor(theme.color[backgroundColor])
    : "black";

  return (
    <div className="wrapper">
      <h1>{title}</h1>

      {contentRight && (
        <div className="row">
          <div className="flex left">
            {renderRichText(content, renderOptions)}
          </div>
          <div className="flex right">
            {renderRichText(contentRight, renderOptions)}
          </div>
        </div>
      )}

      {!contentRight && renderRichText(content, renderOptions)}

      <style jsx>{`
        .flex {
          flex: 1;
        }
        .flex.right {
          margin-left: ${theme.margin.ms};
        }
        .flex.left {
          margin-right: ${theme.margin.ms};
        }
        .row {
          display: flex;
          flex-direction: row;
        }
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
