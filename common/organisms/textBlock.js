import React, { useState } from "react";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import BlockWrapper from '../molecules/blockWrapper';

const TextBlock = ({ title, content }) => {
  return (
    <BlockWrapper>
      <h1>{title}</h1>
      {renderRichText(content)}
      <style jsx>{``}</style>
    </BlockWrapper>
  );
};

export default TextBlock;
