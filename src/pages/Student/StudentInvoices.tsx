import React, { useEffect, useState } from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useMediaQuery from "../../hooks/MediaQuery";
import { useSearchParams } from "react-router-dom";
import PrintIcon from "@mui/icons-material/Print";
import Spinner from "../../components/Spinner";
import {
  ViewText,
  BackView,
  BackViewCustom,
  DateDashboard,
  DateDashboardCustom,
  EmailDashboard,
  NameDashboard,
  PrintText,
} from "../../components/StudentDashboard/StudentDashboardStyles";
import { getStudentInvoices } from "../../api";
import { ViewStudentInvoice } from "./ViewStudentInvoice";
import StudentInvoiceTemplate from "./StudentInvoiceTemplate";

const StudentInvoices = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const [tableHeader, setTableHeader] = React.useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [tableData, setTableData] = React.useState([]);
  let [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  let activeTab = searchParams.get("tab");

  useEffect(() => {
    setIsLoading(true);
    getStudentInvoices().then((res) => {
      setTableData(res);
      setIsLoading(false);
    });
  }, [activeTab]);

  const getAllInvoices = async (type: string) => {
    setIsLoading(true);
    await getStudentInvoices().then((res) => {
      setTableData(res);
      setIsLoading(false);
    });
  };

  const handleShowDetails = (invoice: object) => {
    setInvoiceDetails(invoice);
    setShowDetails(true);
  };

  return (
    <TableContainer
      sx={{
        width: isMobile ? "100%" : "105%",
        margin: "auto",
        border: "1px solid #8C8C8C",
        background: "#F2F5F9",
        elevation: 0,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {tableHeader.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  color: "#000000",
                  borderBottom: "1px solid #8C8C8C",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TableBody>
              {tableData.map((row: any, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{ borderBottom: "1px solid #8C8C8C" }}
                >
                  <TableCell sx={{ borderBottom: "1px solid #8C8C8C" }}>
                    <DateDashboardCustom>{row?.invoiceId}</DateDashboardCustom>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #8C8C8C" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "-15px",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={row.image}
                        sx={{ width: 50, height: 50 }}
                      />
                      <div
                        style={{
                          alignSelf: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "8%",
                          }}
                        >
                          <NameDashboard>
                            {row?.sender?.first_name + row?.sender?.last_name}
                          </NameDashboard>
                          <EmailDashboard>{row?.sender?.email}</EmailDashboard>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #8C8C8C" }}>
                    <DateDashboard>{`${row?.netAmt} $`}</DateDashboard>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #8C8C8C" }}>
                    <DateDashboard>
                      {new Date(row.creationDate).toDateString().split(" ")[2] +
                        " "}
                      {new Date(row.creationDate).toDateString().split(" ")[1]},
                      {" " +
                        new Date(row.creationDate).toDateString().split(" ")[3]}
                    </DateDashboard>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #8C8C8C" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <BackView>
                        <div
                          style={{ display: "flex", flexDirection: "row" }}
                          onClick={() => handleShowDetails(row)}
                        >
                          <RemoveRedEyeIcon
                            style={{
                              fontSize: "15px",
                              color: "#7476D1",
                              margin: "auto",
                            }}
                          />
                          <ViewText>VIEW</ViewText>
                        </div>
                      </BackView>
                      <BackViewCustom>
                        <PDFDownloadLink
                          document={<StudentInvoiceTemplate data={row} />}
                          fileName="somename.pdf"
                        >
                          {({ blob, url, loading, error }) =>
                            loading ? (
                              "Loading document..."
                            ) : (
                              <a
                                href={url?.toString()}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <PrintIcon
                                    style={{
                                      fontSize: "15px",
                                      color: "#FFFF",
                                      margin: "auto",
                                    }}
                                  />
                                  <PrintText>PRINT</PrintText>
                                </div>
                              </a>
                            )
                          }
                        </PDFDownloadLink>
                      </BackViewCustom>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {showDetails && (
              <ViewStudentInvoice
                open={showDetails}
                setShowDetails={setShowDetails}
                data={invoiceDetails}
                getAllInvoices={getAllInvoices}
              />
            )}
          </>
        )}
      </Table>
    </TableContainer>
  );
};

export default StudentInvoices;
