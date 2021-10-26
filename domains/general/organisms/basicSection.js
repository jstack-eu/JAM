import React, { useState } from "react";
import theme from "../../../styles/theme";
import RichText from "../molecules/richText";
import { useRouter } from "next/router";

const BasicSection = ({ isRealisation, title, image, content }) => {
  const getType = (item) => item?.sys?.contentType?.sys?.id;
  const checkType = (item, id) => item?.sys?.contentType?.sys?.id === id;
  const getContent = (item) => item?.fields?.text;
  const router = useRouter();

  return (
    <div className="wrapper">
      <div className="titleRow">
        {isRealisation && (
          <i
            onClick={() => router.back()}
            fontSize="34"
            color={theme.primary}
            className="fa fa-2x fa-arrow-circle-left"
          ></i>
        )}
        <div className="title">{title}</div>
      </div>
      {image && <img className="image" src={image.fields.file.url} />}
      <div className="flex">
        <RichText content={content} />
        {getType(content) && checkType(content, "blockText") && (
          <RichText content={getContent(content)} />
        )}
      </div>

      <style jsx>{`
        .wrapper {
          padding-top: ${theme.margin.xxxl};
          padding-bottom: ${theme.margin.xxxl};
          width: 920px;
          margin-left: auto;
          margin-right: auto;
        }
        img {
          max-width: 100%;
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
        .image {
          width: 100%;
        }
        .titleRow {
          flex-direction: row;
          display: flex;
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
        .fa-arrow-circle-left {
          cursor: pointer;
          margin-right: ${theme.margin.m};
          margin-top: 4px;
          color: ${theme.color.secondary};
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        @media screen and (max-width: ${theme.media.l}px) {
          .wrapper {
            max-width: 100%;
            padding-top: ${theme.margin.xl};
            padding-bottom: ${theme.margin.xl};
          }
          .title {
            margin-bottom: ${theme.margin.m};
          }
        }
      `}</style>
    </div>
  );
};

export default BasicSection;
