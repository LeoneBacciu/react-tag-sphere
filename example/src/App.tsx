import React from "react";
import TagCloud from "react-3d-tag-cloud";
import "./App.css";
import "react-3d-tag-cloud/dist/index.css";

function App() {
  return (
    <div className="App">
      <TagCloud speed={0.6} radius={300} maxSpeed={0.7} margin={12.5}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "red",
              cursor: "pointer",
            }}
          />
        ))}
      </TagCloud>
    </div>
  );
}

export default App;
