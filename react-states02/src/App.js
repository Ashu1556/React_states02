import React, { useState } from "react";
import "./App.css";
import Editor from "./Component/Editor";
import Preview from "./Component/Preview";

function App() {
  const [markdownContent, setMarkdownContent] = useState("");
  return (
    <div>
      <Editor
        markdownContent={markdownContent}
        onMarkdownChange={(newContent) => setMarkdownContent(newContent)}
      />
      <Preview markdownContent={markdownContent} />
    </div>
  );
}

export default App;
