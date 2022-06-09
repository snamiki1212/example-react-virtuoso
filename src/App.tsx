import React from "react";

import Stack from "@mui/material/Stack";

import { InfiniteScroll } from "./components/InfiniteScroll/plain";

function App() {
  const { type, render, setInfiniteType } = useSwitchRender();
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

      <div style={{ height: "100px", background: "lightblue" }}>
        <div>this is head. type is ({type})</div>
        <button onClick={setInfiniteType}>Infinite</button>
      </div>
      <Stack direction="row" flex={1}>
        <Stack style={{ background: "black", width: "50px" }}></Stack>
        <Stack flex="1">{render()}</Stack>
      </Stack>
      <div style={{ height: "100px", background: "lightblue" }}>===end</div>
    </div>
  );
}

const useSwitchRender = () => {
  const [type, setType] = React.useState<"infinite">("infinite");
  const setInfiniteType = () => setType("infinite");

  const render = () => {
    if (type === "infinite") return <InfiniteScroll />;
    return undefined;
  };

  return { setInfiniteType, render, type };
};

export default App;
