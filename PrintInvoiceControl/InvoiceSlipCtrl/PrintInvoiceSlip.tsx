import * as React from "react";
import URLProvider from "./components/URLProvider";
import { ReportDataContext } from "./contexts/ReportContext";
import IReportData from "./interfaces/IReportData";

// Main Function
const PrintOrderSlip = ( reportData: IReportData ) => {
  return (
    <>
    <ReportDataContext.Provider value={reportData}>
      <URLProvider />
    </ReportDataContext.Provider>
    </>
  );
};

export default React.memo(PrintOrderSlip);