import React from "react";

import Stack from "@mui/material/Stack";

import { InfiniteScroll } from "./components/InfiniteScroll/plain";

function App() {
  return (
    <div
      style={{
        height: "100%",
        background: "pink",
        display: "flex",
        flexDirection: "column",

        //
        // overflow: "hidden",
      }}
    >
      <div
        style={{ top: 0, position: "sticky", background: "pink", zIndex: 999 }}
      >
        this is header
      </div>
      <div style={{ height: "100px", background: "lightblue" }}>===start</div>
      <Stack
        // overflow={"scroll"} // TODO: overflow?
        direction="row"
        flex={1}
      >
        <Stack style={{ background: "black", width: "50px" }}></Stack>
        <Stack flex="1">
          <InfiniteScroll />
        </Stack>
      </Stack>
      <div style={{ height: "100px", background: "lightblue" }}>===end</div>
    </div>
  );
}

export default App;
