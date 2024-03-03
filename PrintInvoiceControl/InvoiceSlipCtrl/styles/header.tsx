import { StyleSheet } from "@react-pdf/renderer";

export const headerBase = StyleSheet.create({
  container: {
    margin: "20 20 0 20",
    fontSize: 10,
    display: "flex",
    flexDirection: "column",
  },
  companyName: {
    fontSize: 20,
    color: "#0070C0"
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 5,
  },
  input: {
    color: "#0070C0"
  }
});

export const extendedHeader = StyleSheet.create({
  invoice: {
    ...headerBase.cell,
    fontSize: 35
  }
});
