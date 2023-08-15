import React from "react";

const Editor = ({ markdownContent, onMarkdownChange }) => {
  const handleInputChange = (event) => {
    const newContent = event.target.value;
    onMarkdownChange(newContent);
  };

  return (
    <div
      className="editor-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Markdown Editor</h2>
      <textarea
        className="editor"
        value={markdownContent}
        onChange={handleInputChange}
        placeholder="Start typing your Markdown content here..."
      />
    </div>
  );
};

export default Editor;
