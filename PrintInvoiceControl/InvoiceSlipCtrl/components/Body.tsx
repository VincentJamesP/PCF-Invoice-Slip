import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import { bodyBase, extendedBody } from "../styles/body";
import ICustomerInfoProps from "../interfaces/ICustomerInfoProps";
import ITransactionInfoProps from "../interfaces/ITransactionInfoProps";
import ITaxInfoProps from "../interfaces/ITaxInfoProps";

const vatLabels = [
  ["VATABLE SALES", ""],
  ["VAT EXEMPT SALES", "ADD VAT"],
  ["ZERO RATED SALES", "TOTAL AMOUNT DUE"],
];

const Body: React.FC<
  ICustomerInfoProps &
    ITransactionInfoProps & { companyName: string } & {
      storeName: string;
    } & ITaxInfoProps
> = ({ customerInfo, transactions, companyName, storeName, taxInfo }) => {
  const propertyOrder = ["exclVat", "vat", "inclVat"];
  const taxValues = propertyOrder.map((key) => {
    if (key === "exclVat") {
      return taxInfo[0].exclVat;
    } else if (key === "inclVat") {
      return taxInfo[0].inclVat;
    } else {
      return taxInfo[0].vat;
    }
  });

  return (
    <>
      <View style={bodyBase.container}>
        {customerInfo.map((row, index) => (
          <View style={bodyBase.row} key={`customer-${index}`}>
            {/* Customer Information */}
            <View style={extendedBody.customerCell}>
              <Text>
                Sold to: <Text style={bodyBase.input}>{row.name}</Text>
              </Text>
              <Text>
                Address: <Text style={bodyBase.input}>{row.address}</Text>
              </Text>
              <Text>
                TIN: <Text style={bodyBase.input}>{row.tin}</Text>
              </Text>
            </View>
            <View style={extendedBody.customerCell}>
              <Text> </Text>
              <Text> </Text>
              <Text>
                Business Style:{" "}
                <Text style={bodyBase.input}>{row.businessStyle}</Text>
              </Text>
            </View>
            <View style={extendedBody.customerCell}>
              <Text>
                Date: <Text style={bodyBase.input}>{row.date}</Text>
              </Text>
              <Text>
                Terms: <Text style={bodyBase.input}>{row.terms}</Text>
              </Text>
              <Text>
                Tel. No.: <Text style={bodyBase.input}>{row.telNo}</Text>
              </Text>
            </View>
          </View>
        ))}
        {/* Transaction Information */}
        <View style={bodyBase.table}>
          <View style={bodyBase.row}>
            <Text style={extendedBody.theadBorder}>Quantity</Text>
            <Text style={extendedBody.theadBorder}>Unit</Text>
            <Text style={extendedBody.articleCol}>ARTICLES</Text>
            <Text style={extendedBody.theadBorder}>Unit Price</Text>
            <Text style={extendedBody.thead}>Amount</Text>
          </View>

          {transactions.map((row, index) => (
            <View style={bodyBase.row} key={`transaction-${index}`}>
              <View style={extendedBody.rightCell}>
                <Text style={bodyBase.input}>{row.quantity}</Text>
              </View>
              <View style={bodyBase.cell}>
                <Text style={bodyBase.input}>{row.unit}</Text>
              </View>
              <View style={extendedBody.articleCell}>
                <Text style={bodyBase.input}>
                  {row.itemcode.includes("\n")
                    ? row.itemcode
                    : row.itemcode + "\n "}
                </Text>
              </View>
              <View style={extendedBody.rightCell}>
                <Text style={bodyBase.input}>{row.unitprice}</Text>
              </View>
              <View style={extendedBody.rightCell}>
                <Text style={bodyBase.input}>{row.amount}</Text>
              </View>
            </View>
          ))}

          {/* Empty rows */}
          {[...Array(Math.max(0, 6 - transactions.length))].map((_, index) => (
            <View style={bodyBase.row} key={`empty-${index}`}>
              <Text style={bodyBase.cell}> {"\n"} </Text>
            </View>
          ))}

          {/* Tax Calculation */}
          {vatLabels.map((label, index) => (
            <View style={bodyBase.row} key={`tax-${index}`}>
              <View style={bodyBase.cell} />
              <View style={bodyBase.cell} />
              <View style={extendedBody.articleCell}>
                <View style={bodyBase.row} key={`sales-${index}`}>
                  <Text style={extendedBody.taxLabel}>{label[0]}</Text>
                  <Text style={extendedBody.taxLabel}>{label[1]}</Text>
                </View>
              </View>
              <Text style={extendedBody.taxValue}>{taxValues[index]}</Text>
              <View style={bodyBase.cell} />
            </View>
          ))}
        </View>

        {/* Consent */}
        <View style={bodyBase.row}>
          <View style={extendedBody.consent}>
            <Text>
              By signing this form, I agree that{" "}
              <Text style={bodyBase.companyName}>{companyName}</Text> may
              collect, use and disclose my personal data which will be used for
              the purpose of processing my transaction, managing my accounts and
              marketing campaigns, In accordance with the Data Privacy Act of
              2012. I hereby confirm that all information provided are true and
              correct.
            </Text>
          </View>
        </View>
        <View style={bodyBase.table}>
          <View style={bodyBase.row}>
            <Text style={extendedBody.theadLeftBorder}>Prepared by:</Text>
            <Text style={extendedBody.theadLeftBorder}>Approved By:</Text>
            <Text style={extendedBody.theadLeftBorder}>Released By:</Text>
            <Text style={extendedBody.signatureCell}>
              Received the above articles in good order and condition
            </Text>
          </View>
          <View style={bodyBase.row}>
            <View style={extendedBody.theadLeftBorder}>
              <Text style={extendedBody.store}>{storeName}</Text>
            </View>
            <View style={extendedBody.theadLeftBorder} />
            <View style={extendedBody.theadLeftBorder} />
            <View style={extendedBody.signatureCell} />
          </View>
          <View style={bodyBase.row}>
            <View style={extendedBody.theadLeftBorder} />
            <View style={extendedBody.theadLeftBorder} />
            <View style={extendedBody.theadLeftBorder} />
            <Text style={extendedBody.signatureBottomCell}>
              Customer&rsquo;s Signature
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Body;
