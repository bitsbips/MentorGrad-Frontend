import React, { useEffect } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { formatDate } from "../../helper-functions";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textDecoration: "underline",
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
  },
  border: {
    borderBottom: "3px solid #5F61BE",
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  fontSizeSmall: {
    fontSize: "small",
  },
  h6: {
    fontSize: "medium",
    fontWeight: "bold",
  },
  colorGray: {
    color: "gray",
  },
});

const StuentInvoiceTemplate = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <Text
              style={{
                borderBottom: "2px solid #a93efa",
                marginBottom: "10px",
                display: "flex",
              }}
            >
              {data?.invoiceId}
            </Text>
          </View>

          <Text style={{ marginLeft: "auto" }}>{`$${data?.netAmt}`}</Text>


          <View>
            <Text
              style={{
                borderBottom: "2px solid #a93efa",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              Description
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: "12px", color: "gray" }}>
              {data?.description}
            </Text>
          </View>

          <View>
            <View>
              <Text
                style={{
                  borderBottom: "2px solid #a93efa",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                Date & Time
              </Text>
            </View>

            <Text style={{ fontSize: "12px", color: "gray" }}>
              {data?.createdAt.split("T")[1]}
            </Text>

            <Text style={{ fontSize: "12px", color: "gray" }}>
              {data?.createdAt.split("T")[0]}
            </Text>
          </View>

          <View>
            <View>
              <Text
                style={{
                  borderBottom: "2px solid #a93efa",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                Sender Information
              </Text>
            </View>

            <View>
              <View />
              <View>
                <Text style={{ fontSize: "12px", color: "gray" }}>
                  {data?.sender?.first_name + " " + data?.sender?.last_name}
                </Text>
                <Text style={{ fontSize: "12px", color: "gray" }}>
                  {data?.sender?.email}
                </Text>
              </View>
            </View>
          </View>

          {/* Receiver Information */}
          <View>
            <View>
              <Text
                style={{
                  borderBottom: "2px solid #a93efa",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                Receiver Information
              </Text>
            </View>

            <View>
              <View />
              <View>
                <Text style={{ fontSize: "12px", color: "gray" }}>
                  {data?.receiver?.first_name + " " + data?.receiver?.last_name}
                </Text>
                <Text style={{ fontSize: "12px", color: "gray" }}>
                  {data?.receiver?.email}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default StuentInvoiceTemplate;
