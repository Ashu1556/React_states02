import React, { useState } from "react";
import "./App.css";
import TextCard from "./Component/TextCard";

function App() {
  const [showColor, setShowColor] = useState(false);

  const handleColor = () => {
    setShowColor(!showColor);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: showColor ? "black" : "white",
      }}
    >
      <div style={{ float: "right", marginLeft: "5px", marginTop: "5px" }}>
        <button onClick={handleColor}>Toogle</button>
      </div>
      <TextCard
        title="Welcome to My React App"
        content="This is a simple example of a text card component in React.js."
        showColor={showColor}
      />
    </div>
  );
}

export default App;
