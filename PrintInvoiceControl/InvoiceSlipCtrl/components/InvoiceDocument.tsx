import * as React from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import IReportDataProps from "../interfaces/IReportDataProps";
import { containerBase } from "../styles/container";
import Header from "./Header";
import ICompanyInfo from "../interfaces/ICompanyInfo";
import Footer from "./Footer";
import Body from "./Body";
import ICustomerInfo from "../interfaces/ICustomerInfo";
import ITransactionInfo from "../interfaces/ITransactionInfo";
import ITaxInfo from "../interfaces/ITaxInfo";

// Create Document Component
const InvoiceDocument: React.FC<IReportDataProps> = ({ reportData }) => {
  try {
    const companyInfo: ICompanyInfo[] = JSON.parse(reportData.companyInfo);
    const customerInfo: ICustomerInfo[] = JSON.parse(reportData.customerInfo);
    const taxInfo: ITaxInfo[] = JSON.parse(reportData.taxInfo);
    const transactionInfo: ITransactionInfo[] = JSON.parse(
      reportData.trxnLines
    );
    return (
      <Document>
        <Page size={{ width: 912, height: 528 }}>
          <View style={containerBase.container}>
            <Header
              companyInfo={companyInfo}
              invoiceNo={reportData.invoiceNo}
            />
            <Body customerInfo={customerInfo} transactions={transactionInfo} companyName={companyInfo[0].companyName} storeName={reportData.store} taxInfo={taxInfo}/>
            <Footer />
          </View>
        </Page>
      </Document>
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default InvoiceDocument;
