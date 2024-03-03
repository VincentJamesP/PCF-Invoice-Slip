import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import ICompanyInfoProps from "../interfaces/ICompanyInfoProps";
import { extendedHeader, headerBase } from "../styles/header";

const Header: React.FC<ICompanyInfoProps & { invoiceNo: string }> = ({
  companyInfo,
  invoiceNo,
}) => {
  return (
    <>
      <View style={headerBase.container}>
        <View style={headerBase.row}>
          {/* Company Information */}
          {companyInfo.map((row, index) => (
            <View style={headerBase.cell} key={`company-${index}`}>
              <Text style={headerBase.companyName}>
                {row.companyName.toUpperCase()}
              </Text>
              <Text style={headerBase.input}>{row.addressLine1}</Text>
              <Text style={headerBase.input}>{row.addressLine2}</Text>
              <Text>
                VAT Reg. TIN:{" "}
                <Text style={headerBase.input}>{row.vatRegTIN}</Text>
              </Text>
            </View>
          ))}
          <View style={headerBase.cell} />
          {/* Sales Invoice Number */}
          <View style={extendedHeader.invoice}>
            <Text>SALES INVOICE</Text>
            <Text>
              No. <Text style={headerBase.input}>{invoiceNo}</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
