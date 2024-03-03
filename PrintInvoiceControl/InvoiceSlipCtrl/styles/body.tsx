import { StyleSheet } from "@react-pdf/renderer";

export const bodyBase = StyleSheet.create({
  container: {
    margin: "0 20 0 20",
    fontSize: 10,
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: "5 5 3 5",
  },
  input: {
    color: "#0070C0",
    fontSize: 10
  },
  table: {
    display: "flex",
    flexDirection: "column",
    borderStyle: "solid",
    border: 1,
  },
  companyName: {
    fontSize: 12
  }
});

export const extendedBody = StyleSheet.create({
  thead: {
    ...bodyBase.cell,
    fontSize: 15,
    textAlign: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    padding: "5 5 2 5",
  },
  theadLeft: {
    ...bodyBase.cell,
    fontSize: 10,
    textAlign: "left",
  },
  theadBorder: {
    ...bodyBase.cell,
    fontSize: 15,
    textAlign: "center",
    borderRightWidth: 1,
    borderStyle: "solid",
    borderBottomWidth: 1,
    padding: "5 5 2 5",
  },
  theadLeftBorder: {
    ...bodyBase.cell,
    fontSize: 10,
    textAlign: "left",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  articleCol: {
    flex: 3,
    padding: "5 5 2 5",
    fontSize: 15,
    borderRightWidth: 1,
    borderStyle: "solid",
    textAlign: "center",
    borderBottomWidth: 1
  },
  articleCell: {
    ...bodyBase.cell,
    flex: 3
  },
  customerCell: {
    ...bodyBase.cell,
    padding: "1 5 1 5",
  },
  consent: {
    ...bodyBase.cell,
    textAlign: "center",
    padding: 3
  },
  store: {
    ...bodyBase.input,
    textAlign: "center"
  },
  signatureCell: {
    ...bodyBase.cell,
    fontSize: 10,
    textAlign: "left",
    flex: 2
  },
  signatureBottomCell: {
    ...bodyBase.cell,
    fontSize: 10,
    textAlign: "center",
    flex: 2
  },
  taxLabel: {
    ...bodyBase.cell,
    textAlign: "right",
    padding: 0
  },
  taxValue: {
    ...bodyBase.cell,
    ...bodyBase.input,
    textAlign: "right",
    padding: 0
  },
  rightCell : {
    ...bodyBase.cell,
    textAlign: "right"
  }
});
