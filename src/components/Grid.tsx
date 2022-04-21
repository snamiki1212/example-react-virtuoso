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

const list = Array.from({ length: 30 }, (_, no) => generate(no));

export const Grid = () => {
  const styles = useStyle();
  return (
    <VirtuosoGrid
      /**
       * VirtuosoGrid doesn't support components.Header / components.Footer yet.
       * @see https://github.com/petyosi/react-virtuoso/issues/197
       */
      useWindowScroll
      style={{ overflow: "hidden" }}
      listClassName={styles.list}
      itemClassName={styles.item}
      totalCount={list.length}
      itemContent={(idx) => (
        <div className={styles.itemWrapper}>
          <Item item={list[idx]} />
        </div>
      )}
    />
  );
};

const Item: React.FC<{ item: User }> = ({ item }) => {
  return (
    <div style={{ height: "285px", width: "285px", background: "lightgray" }}>
      {item.name} / {item.id}
    </div>
  );
};
