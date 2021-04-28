import React, { useState } from "react";
import theme from "../styles/theme";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import EmbeddedVideo from "../../media/molecules/embeddedVideo";
import Video from "../../media/molecules/video";
import YoutubeVideo from "../../media/molecules/YoutubeVideo";
import { invertColor } from "../services/colors";

const ContentBlock = ({ title, content, contentRight, backgroundColor }) => {
  // console.log("CONTENT: ", content);
  // console.log("contentRIGHT", contentRight);

  const [form, setForm] = useState({});

  const checkTypeId = (node, id) =>
    node?.data?.target?.sys?.contentType?.sys?.id === id;

  const getNodeFields = (node) => node?.data?.target?.fields;

  const changeValue = (e, item) => {
    setForm({
      ...form,
      [item.key]: e.target.value,
    });
  };

  const send = () => {
    fetch("/.netlify/functions/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => console.log("result: ", r))
      .catch((e) => console.log("e: ", e));
  };

  const inputStyle = () => (
    <style jsx>{`
      .input {
        width: 100%;
        border: 1px solid lightgrey;
        padding: 10px;
        border-radius: 4px;
      }
    `}</style>
  );

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // Not sure if this ever gets loaded, consider it a backup
        if (checkTypeId(node, "videoEmbed")) {
          return <EmbeddedVideo node={node} />;
        }
        if (checkTypeId(node, "form")) {
          return (
            <div>
              {getNodeFields(node).formField.map((field, i) => {
                const item = field.fields;
                console.log("item: ", item);
                if (item.type === "textarea") {
                  return (
                    <div key={i}>
                      <p>{item.label}</p>
                      <textarea
                        className="input"
                        name={item.key}
                        rows={5}
                        onChange={(e) => changeValue(e, item)}
                      ></textarea>
                      {inputStyle()}
                    </div>
                  );
                }
                return (
                  <div key={i}>
                    <p>{item.label}</p>
                    <input
                      className="input"
                      type={item.type}
                      name={item.name}
                      onChange={(e) => changeValue(e, item)}
                    ></input>
                    {inputStyle()}
                  </div>
                );
              })}
              {!getNodeFields(node).hideButton && (
                <button onClick={send}>{getNodeFields(node).button}</button>
              )}
            </div>
          );
        }
        if (checkTypeId(node, "button")) {
          return (
            <button>
              <a href={node.data.target.fields.url}>
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
        .input {
          width: 100%;
          border: 1px solid lightgrey;
          padding: 10px;
          border-radius: 4px;
        }
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
