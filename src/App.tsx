import React from "react";

import { InfiniteScroll } from "./components/InfiniteScroll";

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
        <InfiniteScroll />
      </div>
      <div style={{ height: "100px", background: "lightblue" }}>===end</div>
    </div>
  );
}

export default App;
