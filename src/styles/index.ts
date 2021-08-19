import { createUseStyles } from "vue-jss";

export const testWrapper = {
  background: "red",
  color: "#fff",
};

export const useStyles = createUseStyles({
  container: {},
  imgDiv: {
    display: "flex",
  },
  label: {
    display: "block",
    color: "#777",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    margin: "5px 0",
    padding: 0,
    paddingLeft: 20,
  },
});
