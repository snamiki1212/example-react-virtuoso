import React from "react";

import { VirtuosoGrid } from "react-virtuoso";
import { v4 as uuid } from "uuid";

import { useStyle } from "./style";

type User = { id: string; name: string };

const generate = (prefix: any) => {
  const id = uuid();
  return {
    id,
    name: `${prefix}`,
  } as User;
};

const list = Array.from({ length: 100 }, (_, no) => generate(no));

export const Grid = () => {
  const styles = useStyle();
  return (
    <VirtuosoGrid
      style={{ height: "600px" }}
      // className={styles.virtuoso}
      listClassName={styles.list}
      itemClassName={styles.item}
      totalCount={list.length}
      itemContent={(idx) => <Item item={list[idx]} />}
    />
  );
};

const Item: React.FC<{ item: User }> = ({ item }) => {
  return (
    <div style={{ height: "100px", width: "100px", background: "lightgray" }}>
      {item.name} / {item.id}
    </div>
  );
};
