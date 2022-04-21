import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    /**
     * NOTE: VirtuosoGrid doesn't support "gap" yet.
     * @see https://github.com/petyosi/react-virtuoso/issues/363
     */
  },
  item: {
    flex: 1,
  },
  itemWrapper: {
    padding: "1rem",
  },
});
