import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import { footerBase } from "../styles/footer";

const Footer: React.FC = () => {
  return (
    <>
      <View style={footerBase.container}>
        <View style={footerBase.row}>
          <View style={footerBase.cell}>
            <Text>10 Boxes(500x3) 001-5060</Text>
            <Text>BIR Authority To Print No. OCN 059AU20220000009865</Text>
            <Text>Date Issued: 10-06-2022</Text>
          </View>
          <View style={footerBase.cell}>
            <Text>275-A Sto. Rosario St.,Brgy. Plainview Mandaluyong City</Text>
            <Text>Printers Accreditation No.: 041MP20190000000011</Text>
            <Text>Date Of Issued: JAN 25, 2019</Text>
          </View>
          <View style={footerBase.cell} />
          <View style={footerBase.cell} />
          <View style={footerBase.cell}>
            <Text> </Text>
            <Text>Loose Leaf Permit No.: LLAR-041-0922-00143</Text>
            <Text>Date: SEPT 21, 2022</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Footer;