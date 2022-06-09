import React from "react";
import { Virtuoso } from "react-virtuoso";

export const List = () => {
  return (
    <Virtuoso
      onScroll={(e) => console.log((e?.target as any)?.scrollTop)}
      totalCount={1000}
      // itemContent={(idx) => `Item ${idx}`}
      itemContent={(idx) => (
        <div
          style={{ height: "100px", border: "1px solid black" }}
        >{`Item ${idx}`}</div>
      )}
      style={{
        border: "5px dashed gray",
        borderRadius: "4px",
        // height: 400
        height: "100%",
      }}
    />
  );
};
