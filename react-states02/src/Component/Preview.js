import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ markdownContent }) => {
  return (
    <div
      className="preview-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Preview</h2>
      <div className="preview">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
