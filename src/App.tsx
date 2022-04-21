import React from "react";

import { Grid } from "./components/grid";

function App() {
  return (
    <div
      style={{
        height: "100%",
        background: "pink",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "100px", background: "lightblue" }}>===start</div>
      <div>
        <Grid />
      </div>
      <div style={{ height: "100px", background: "lightblue" }}>===end</div>
    </div>
  );
}

export default App;
