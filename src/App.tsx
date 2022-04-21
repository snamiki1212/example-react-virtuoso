import React from "react";

import { Grid } from "./components/Grid";

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
      <div>===start</div>
      <div>
        <Grid />
      </div>
      <div>===end</div>
    </div>
  );
}

export default App;
