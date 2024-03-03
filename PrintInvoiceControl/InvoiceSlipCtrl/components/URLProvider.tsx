import * as React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";
import { useReportData } from "../contexts/ReportContext";

const URLProvider: React.FC = () => {
  const reportData = useReportData();

  return (
    <BlobProvider document={<InvoiceDocument reportData={reportData} />}>
      {({ blob, url, loading, error }) => {
        return (
          <div>
            {/* {error && <div>Error generating PDF</div>} */}
            {error && openDialog()}
            {url && openURL(url)}
          </div>
        );
      }}
    </BlobProvider>
  );
};

const openDialog = () => {
  alert("Error generating PDF");
}

const openURL = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};

export default URLProvider;
