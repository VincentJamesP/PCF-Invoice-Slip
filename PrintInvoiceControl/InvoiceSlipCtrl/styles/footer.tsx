import { StyleSheet } from "@react-pdf/renderer";

export const footerBase = StyleSheet.create({
  container: {
    margin: "0 20 0 20",
    fontSize: 6,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    width: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: "5 5 0 5",
  },
});

export const extendedFooter = StyleSheet.create({
});