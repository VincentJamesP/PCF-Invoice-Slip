import * as React from "react";
import IReportData from "../interfaces/IReportData";

export const ReportDataContext = React.createContext<IReportData>(undefined!);

export const useReportData = () => {
  return React.useContext(ReportDataContext);
};
