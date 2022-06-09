import React from "react";

import Stack from "@mui/material/Stack";

import { InfiniteScroll } from "./components/InfiniteScroll/plain";
import { List } from "./components/List";

function App() {
  const { type, render, setInfiniteType, setListType } =
    useSwitchRender("list");
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
        <button onClick={setListType}>List</button>
        setListType
      </div>
      <Stack direction="row" flex={1}>
        <Stack style={{ background: "black", width: "50px" }}></Stack>
        <Stack flex="1">{render()}</Stack>
      </Stack>
      <div style={{ height: "100px", background: "lightblue" }}>===end</div>
    </div>
  );
}

type Type = "infinite" | "list";
const useSwitchRender = (defaultType: Type = "infinite") => {
  const [type, setType] = React.useState<Type>(defaultType);
  const setInfiniteType = () => setType("infinite");
  const setListType = () => setType("list");

  const render = () => {
    if (type === "infinite") return <InfiniteScroll />;
    if (type === "list") return <List />;
    return undefined;
  };

  return {
    setListType,
    setInfiniteType,
    render,
    type,
  };
};

export default App;
