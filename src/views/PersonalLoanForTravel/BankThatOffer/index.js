import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import GetMatchedButton from "../../../components/GetMatchedButton";

const BankThatOffer = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#243771",
      color: "white",
      fontWeight: "900",
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FCEFB8",
    },
    // hide last border
    "&:last-child th": {
      border: 0,
      borderRight: "2px solid #C1C5D3",
    },
  }));
  function createData(bank, interestrate) {
    return { bank, interestrate };
  }
  const rows = [
    createData("HDFC Bank", "Starting from 10.50% p.a."),
    createData("IDFC First Bank", "Starting from 10.49% p.a."),
    createData("Kotak Mahindra Bank", "Starting from 10.99% p.a."),
    createData("ICICI Bank", "Starting from 10.75% p.a."),
    createData("Axis Bank", "Starting from 10.25% p.a."),
    createData("Standard Chartered", "Starting from 11% p.a."),
  ];
  return (
    <>
      <Box bgcolor="#fcefd8">
        <Container
          sx={{
            padding: "70px 10px 80px",
          }}
          maxWidth={"xl"}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              //   bgcolor={"red"}
              sx={{
                padding: "0px 10px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: { xs: "flex-start", sm: "center" },
              }}
            >
              <Box
                sx={{
                  // width: { md: "70%" },
                }}
                // bgcolor={"pink"}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    fontSize: { xs: "22px", sm: "24px", md: "36px" },
                    fontFamily: "Inter",
                    color: "#243771",
                    fontWeight: "900",
                    lineHeight: { xs: "1.3", md: "1.1" },
                    margin: { xs: "0px 0px 20px", sm: "0px 0px 30px" },
                    // padding:{xl:"0px 80px 0px"}
                  }}
                >
                  Banks That Offer Travel Loan
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    fontSize: { xs: "17px" },
                    fontFamily: "Inter",
                    color: "#404040",
                    // fontWeight: "900",
                    lineHeight: { xs: "1.5" },
                    margin: { xs: "0px 0px 25px" },
                    // padding:{xl:"0px 80px 0px"}
                  }}
                >
                  Take a look at the following table to learn about some of the
                  top banks that offer travel loans at competitive interest
                  rates:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: { xs: "center", sm: "flex-start" },
                    justifyContent: { xs: "center", sm: "flex-start" },
                    // margin: { xs: "0px 0px 24px" },
                    // padding:{xl:"0rem 5rem 0rem"}
                  }}
                >
                  <GetMatchedButton />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: { xs: "flex-start", sm: "center" },
              }}
            >
              <Box sx={{ width: { md: "80%" } }}>
                <Paper
                  elevation={5}
                  sx={{
                    padding: 2,
                    // boxShadow: "5px 5px 10px gray",
                    backgroundColor: "#E9E9E9",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              //   padding: "16px 10px",
                              fontSize: { xs: "18px" },
                              fontFamily: "Inter,sans-serif",
                            }}
                          >
                            BANK
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              // padding:"16px 10px",
                              fontSize: { xs: "18px" },
                              fontFamily: "Inter,sans-serif",
                            }}
                          >
                            INTEREST RATE
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.i}>
                            <StyledTableCell
                              component="th"
                              scope="row"
                              sx={{
                                borderRight: "2px solid #C1C5D3",
                                fontSize: "18px",
                                fontFamily: "Inter,sans-serif",
                                padding: "15px",
                                textAlign: "center",
                                color: "#404040",
                              }}
                            >
                              {row.bank}
                            </StyledTableCell>
                            <StyledTableCell
                              align="right"
                              sx={{
                                borderRight: "2px solid #C1C5D3",
                                fontSize: "18px",
                                fontFamily: "Inter,sans-serif",
                                padding: "15px",
                                textAlign: "center",
                                color: "#404040",
                              }}
                            >
                              {row.interestrate}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BankThatOffer;
