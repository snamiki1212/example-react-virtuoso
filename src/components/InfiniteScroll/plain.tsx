import React from "react";

import { Virtuoso } from "react-virtuoso";
import { v4 as uuid } from "uuid";
import _ from "lodash";

import { useStyle } from "./style";

const EACH_USER_NUM = 100;
const MAX_DUMMY_NUM = 200;

export const InfiniteScroll = () => {
  const styles = useStyle();
  const [list, setList] = React.useState(users);
  const [vList, setVList] = React.useState<User[][]>([]);
  const [isReachedEnd, setIsReachedEnd] = React.useState(false);

  const load = () => {
    if (isReachedEnd) return;
    setList((prev) => [...prev, ...users]);
    if (list.length > MAX_DUMMY_NUM) setIsReachedEnd(true);
  };

  const endReached = () => {
    setTimeout(() => load(), 1_000);
  };

  React.useEffect(() => {
    setVList(_.chunk(list, 4));
  }, [list]);

  console.log("@@", { list });
  return (
    <>
      <Virtuoso
        style={{ height: "800px" }}
        totalCount={vList.length}
        itemContent={(idx) => (
          <div className={styles.itemWrapper}>
            <Row list={vList[idx]} />
          </div>
        )}
        endReached={endReached}
      />
      {!isReachedEnd && <div>is loading...</div>}
    </>
  );
};

const Row: React.FC<{ list: User[] }> = ({ list }) => {
  return (
    <div style={{ display: "flex" }}>
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

const Item: React.FC<{ item: User }> = ({ item }) => {
  return (
    <div style={{ height: "285px", width: "285px", background: "lightgray" }}>
      {item.name} / {item.id}
      <img src="https://placedog.net/260" alt="" />
    </div>
  );
};

/************************
 * Test Data
 ************************/
type User = { id: string; name: string };

const generate = (prefix: any) => {
  const id = uuid();
  return {
    id,
    name: `${prefix}`,
  } as User;
};

const users = Array.from({ length: EACH_USER_NUM }, (_, no) => generate(no));
