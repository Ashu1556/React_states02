import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./styles.css";

const fileTypes = ["JPG", "PNG", "GIF"];

const Drag_DropComponent = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return <div></div>;
};

export default Drag_DropComponent;
